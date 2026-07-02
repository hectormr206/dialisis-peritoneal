// installPrompt: captures the browser's `beforeinstallprompt` event so the
// app can offer its own "Instalar" button instead of relying on Chrome's
// automatic mini-infobar (no longer reliably shown) or the elderly/
// low-literacy audience finding the browser's ⋮ menu on their own.
//
// Same DI-friendly shape as registerServiceWorker.js: every function accepts
// injectable refs (windowRef/navigatorRef/storageRef) so the capture/
// dismissal logic is unit-testable in jsdom without faking real browser
// install-prompt behavior. Timestamps are never read at module scope
// (no `const NOW = Date.now()` at import time) — `now` is always computed
// or injected at call time so jest tests (fake timers or an explicit `now`)
// can control it deterministically.

export const DISMISS_STORAGE_KEY = 'installpromo:v1'

// ~30 days — once someone taps "Ahora no", stay hidden for a while instead
// of nagging on every visit.
const DISMISS_DURATION_MS = 30 * 24 * 60 * 60 * 1000

// `beforeinstallprompt` can fire at any point after the app boots — often
// before the InstallBanner (Home-only) ever mounts. Capture has to be wired
// once at app boot (src/index.js) and stashed somewhere both index.js and
// the component can reach, same reasoning as registerServiceWorker's own
// module-level registration. createInstallPromptStore() is the factory so
// tests can create isolated instances instead of sharing mutable module
// state across unrelated test cases.
export function createInstallPromptStore () {
  let deferredEvent = null
  const listeners = new Set()

  const notify = () => {
    listeners.forEach((listener) => listener())
  }

  return {
    // Wires the two events this store cares about. Safe to call once per
    // store; safe to no-op when there's no windowRef (SSR/tests).
    capture ({
      windowRef = typeof window !== 'undefined' ? window : undefined
    } = {}) {
      if (!windowRef || typeof windowRef.addEventListener !== 'function') {
        return false
      }

      windowRef.addEventListener('beforeinstallprompt', (event) => {
        // Stops Chrome's own mini-infobar so the in-app banner is the only
        // install UI the person sees — otherwise they'd get both.
        event.preventDefault()
        deferredEvent = event
        notify()
      })

      windowRef.addEventListener('appinstalled', () => {
        deferredEvent = null
        notify()
      })

      return true
    },

    getDeferredEvent () {
      return deferredEvent
    },

    // React reads this store via subscribe (no external store library
    // needed for one boolean-ish flag). Returns an unsubscribe function.
    subscribe (listener) {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },

    // Fires the real native prompt from the stashed event. Resolves with
    // the browser's `{ outcome, platform }` choice, or null if there was
    // nothing stashed to prompt with.
    async promptInstall () {
      if (!deferredEvent) {
        return null
      }

      const event = deferredEvent
      // A stashed `beforeinstallprompt` event can only be prompted once —
      // clear it up front so a second tap (or appinstalled firing mid-await)
      // never tries to reuse a spent event.
      deferredEvent = null
      notify()

      event.prompt()
      return event.userChoice
    }
  }
}

// Single production-wide store — see the factory comment above for why this
// needs to live outside any one component's lifecycle.
export const installPromptStore = createInstallPromptStore()

// Already running as an installed PWA — covers both the standard
// `display-mode: standalone` media query (Chrome/Android) and iOS Safari's
// own `navigator.standalone` flag (iOS never matches display-mode).
export function isStandalone ({
  windowRef = typeof window !== 'undefined' ? window : undefined,
  navigatorRef = typeof navigator !== 'undefined' ? navigator : undefined
} = {}) {
  const displayModeStandalone =
    Boolean(windowRef) &&
    typeof windowRef.matchMedia === 'function' &&
    windowRef.matchMedia('(display-mode: standalone)').matches

  const iosStandalone = Boolean(navigatorRef) && navigatorRef.standalone === true

  return displayModeStandalone || iosStandalone
}

// iOS Safari never fires `beforeinstallprompt` — the only install path
// there is the manual "Compartir -> Agregar a pantalla de inicio" flow, so
// InstallBanner needs to know when to show those instructions instead.
export function isIOSSafari ({
  navigatorRef = typeof navigator !== 'undefined' ? navigator : undefined
} = {}) {
  if (!navigatorRef) {
    return false
  }

  const platform = navigatorRef.platform || ''
  const userAgent = navigatorRef.userAgent || ''
  const maxTouchPoints = navigatorRef.maxTouchPoints || 0

  // iPadOS 13+ reports platform as 'MacIntel' but exposes multi-touch —
  // the standard sniff used to tell an iPad apart from a real Mac.
  const isIOSDevice =
    /iPad|iPhone|iPod/.test(platform) ||
    (platform === 'MacIntel' && maxTouchPoints > 1)

  const isSafariEngine =
    /Safari/.test(userAgent) && !/CriOS|FxiOS|EdgiOS|OPiOS/.test(userAgent)

  return isIOSDevice && isSafariEngine
}

const readDismissRecord = (storageRef) => {
  if (!storageRef) {
    return null
  }

  let raw
  try {
    raw = storageRef.getItem(DISMISS_STORAGE_KEY)
  } catch (error) {
    // localStorage unavailable (private mode, disabled, etc.) — treat as absent
    return null
  }

  if (!raw) {
    return null
  }

  try {
    return JSON.parse(raw)
  } catch (error) {
    return null
  }
}

// now = Date.now() is evaluated at call time (default parameters are lazy
// per-invocation, never at module load), so real callers always get a fresh
// timestamp — tests can still override it explicitly or drive it with
// jest fake timers.
export function isDismissed ({
  storageRef = typeof window !== 'undefined' ? window.localStorage : undefined,
  now = Date.now()
} = {}) {
  const record = readDismissRecord(storageRef)
  if (!record || typeof record.dismissedAt !== 'number') {
    return false
  }

  return now - record.dismissedAt < DISMISS_DURATION_MS
}

export function dismiss ({
  storageRef = typeof window !== 'undefined' ? window.localStorage : undefined,
  now = Date.now()
} = {}) {
  if (!storageRef) {
    return
  }

  try {
    storageRef.setItem(
      DISMISS_STORAGE_KEY,
      JSON.stringify({ dismissedAt: now })
    )
  } catch (error) {
    // localStorage unavailable — fail silently, matching progressStorage's
    // existing best-effort persistence behavior
  }
}
