// registerServiceWorker: gates the real service-worker registration
// (Workbox-generated `service-worker.js`, see webpack.config.js) so it only
// runs in a production build with browser support. No service worker runs
// in development — hot reload and the dev server would otherwise fight
// stale caches.
//
// Dependencies are injectable (nodeEnv/navigatorRef/windowRef/onError/
// onUpdateAvailable) so the gating logic is unit-testable in jsdom without
// faking real browser service-worker behavior.
//
// Update notice: GenerateSW runs with skipWaiting + clientsClaim (see
// webpack.config.js), so a new service worker version installs and takes
// control automatically — it does NOT wait for every tab to close. That is
// convenient for shipping fixes, but it must never yank the page out from
// under a patient who may be mid-procedure reading step-by-step
// instructions. So this file never reloads on its own: it only listens for
// a new worker reaching the `activated` state on a page that already had a
// controller (i.e. a genuine update, not the very first install) and shows
// a dismissible notice; the actual reload only happens if the person taps
// "Actualizar" themselves.

const UPDATE_TOAST_ID = 'sw-update-toast'

// Builds and injects the update-available toast via plain DOM APIs (no
// React, no extra dependency like workbox-window) — this runs from
// src/index.js before/independently of the React tree, and the toast reads
// the same CSS custom properties GlobalStyle sets on :root, since it's
// appended straight to <body>, still a descendant of :root.
export function showUpdateNotice ({
  documentRef = typeof document !== 'undefined' ? document : undefined,
  windowRef = typeof window !== 'undefined' ? window : undefined,
  onUpdate
} = {}) {
  if (!documentRef || documentRef.getElementById(UPDATE_TOAST_ID)) {
    // Already showing (or no DOM to show it in) — never stack duplicates.
    return
  }

  const reload = onUpdate || (() => windowRef && windowRef.location.reload())

  const toast = documentRef.createElement('div')
  toast.id = UPDATE_TOAST_ID
  toast.setAttribute('role', 'status')
  toast.setAttribute('aria-live', 'polite')
  toast.style.cssText = [
    'position:fixed',
    'left:50%',
    'bottom:calc(var(--footer-height, 64px) + 12px)',
    'transform:translateX(-50%)',
    'z-index:10000',
    'display:flex',
    'align-items:center',
    'gap:12px',
    'max-width:calc(100vw - 24px)',
    'padding:12px 16px',
    'border-radius:8px',
    'background:var(--body-card, #ffffff)',
    'color:var(--color-primary, #1e293b)',
    'border:1px solid var(--border-color, #e2e8f0)',
    'box-shadow:var(--shadow-medium, 0 4px 6px -1px rgb(0 0 0 / 0.1))',
    'font-family:var(--font-family-primary, system-ui, sans-serif)',
    'font-size:var(--font-size-sm, 14px)'
  ].join(';')

  const icon = documentRef.createElement('span')
  icon.setAttribute('aria-hidden', 'true')
  icon.textContent = '↻' // ↻ — simple refresh glyph, no icon library needed
  icon.style.cssText = 'font-size:20px;line-height:1;flex-shrink:0'

  const text = documentRef.createElement('span')
  text.textContent = 'Hay una versión nueva de la guía.'
  text.style.cssText = 'flex:1 1 auto'

  const updateButton = documentRef.createElement('button')
  updateButton.type = 'button'
  updateButton.textContent = 'Actualizar'
  updateButton.style.cssText = [
    'min-height:44px',
    'min-width:44px',
    'padding:8px 16px',
    'border:0',
    'border-radius:6px',
    // #1d4ed8/white = 6.70:1, cumple AA — mismo patrón que HomeLink
    // (NoMatch.js) y el skip-link, no var(--color-accent) (3.68:1, falla).
    'background:#1d4ed8',
    'color:#ffffff',
    'font-weight:600',
    'cursor:pointer',
    'flex-shrink:0'
  ].join(';')
  updateButton.addEventListener('click', () => {
    reload()
  })
  updateButton.addEventListener('mouseenter', () => {
    updateButton.style.background = '#047857'
  })
  updateButton.addEventListener('mouseleave', () => {
    updateButton.style.background = '#1d4ed8'
  })

  const dismissButton = documentRef.createElement('button')
  dismissButton.type = 'button'
  dismissButton.setAttribute('aria-label', 'Cerrar aviso de actualización')
  dismissButton.textContent = '✕' // ✕
  dismissButton.style.cssText = [
    'min-height:44px',
    'min-width:44px',
    'padding:0',
    'border:0',
    'border-radius:6px',
    'background:transparent',
    'color:var(--color-secondary, #64748b)',
    'cursor:pointer',
    'flex-shrink:0'
  ].join(';')
  dismissButton.addEventListener('click', () => {
    toast.remove()
  })

  toast.appendChild(icon)
  toast.appendChild(text)
  toast.appendChild(updateButton)
  toast.appendChild(dismissButton)
  documentRef.body.appendChild(toast)
}

export function registerServiceWorker ({
  nodeEnv = process.env.NODE_ENV,
  navigatorRef = typeof navigator !== 'undefined' ? navigator : undefined,
  windowRef = typeof window !== 'undefined' ? window : undefined,
  documentRef = typeof document !== 'undefined' ? document : undefined,
  onError = (error) => console.error('Service worker registration failed:', error),
  onUpdateAvailable = () => showUpdateNotice({ documentRef, windowRef })
} = {}) {
  const supportsServiceWorker =
    Boolean(navigatorRef) && 'serviceWorker' in navigatorRef

  if (nodeEnv !== 'production' || !supportsServiceWorker || !windowRef) {
    return false
  }

  windowRef.addEventListener('load', () => {
    return navigatorRef.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        if (!registration || typeof registration.addEventListener !== 'function') {
          return registration
        }

        // A controller already present at registration time means this
        // page was already running a previous service worker version —
        // any worker that reaches `activated` from here on is a genuine
        // update, not the first-ever install for this visitor.
        const hadControllerAtRegister = Boolean(navigatorRef.serviceWorker.controller)

        registration.addEventListener('updatefound', () => {
          const installingWorker = registration.installing

          if (!installingWorker || typeof installingWorker.addEventListener !== 'function') {
            return
          }

          installingWorker.addEventListener('statechange', () => {
            if (installingWorker.state === 'activated' && hadControllerAtRegister) {
              onUpdateAvailable()
            }
          })
        })

        return registration
      })
      .catch(onError)
  })

  return true
}
