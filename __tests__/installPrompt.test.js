import {
  createInstallPromptStore,
  isStandalone,
  isIOSSafari,
  isDismissed,
  dismiss,
  DISMISS_STORAGE_KEY
} from '../src/utils/installPrompt'

const buildWindow = () => {
  const listeners = {}
  return {
    addEventListener: jest.fn((event, handler) => {
      listeners[event] = listeners[event] || []
      listeners[event].push(handler)
    }),
    matchMedia: jest.fn(() => ({ matches: false })),
    _fire (event, payload) {
      (listeners[event] || []).forEach((handler) => handler(payload))
    }
  }
}

const buildEvent = ({ outcome = 'accepted' } = {}) => ({
  preventDefault: jest.fn(),
  prompt: jest.fn(),
  userChoice: Promise.resolve({ outcome, platform: 'web' })
})

const buildStorage = () => {
  const data = {}
  return {
    getItem: jest.fn((key) => (key in data ? data[key] : null)),
    setItem: jest.fn((key, value) => {
      data[key] = value
    })
  }
}

describe('installPromptStore', () => {
  it('does nothing when there is no windowRef', () => {
    const store = createInstallPromptStore()
    // `null`, not `undefined` — an explicit `undefined` would fall through
    // to the default parameter (the real jsdom `window`), which is not
    // what this case is testing.
    expect(store.capture({ windowRef: null })).toBe(false)
  })

  it('stashes the beforeinstallprompt event and prevents the default mini-infobar', () => {
    const store = createInstallPromptStore()
    const windowRef = buildWindow()
    store.capture({ windowRef })

    const event = buildEvent()
    windowRef._fire('beforeinstallprompt', event)

    expect(event.preventDefault).toHaveBeenCalledTimes(1)
    expect(store.getDeferredEvent()).toBe(event)
  })

  it('notifies subscribers when the event is captured', () => {
    const store = createInstallPromptStore()
    const windowRef = buildWindow()
    store.capture({ windowRef })

    const listener = jest.fn()
    store.subscribe(listener)

    windowRef._fire('beforeinstallprompt', buildEvent())

    expect(listener).toHaveBeenCalledTimes(1)
  })

  it('unsubscribe stops further notifications', () => {
    const store = createInstallPromptStore()
    const windowRef = buildWindow()
    store.capture({ windowRef })

    const listener = jest.fn()
    const unsubscribe = store.subscribe(listener)
    unsubscribe()

    windowRef._fire('beforeinstallprompt', buildEvent())

    expect(listener).not.toHaveBeenCalled()
  })

  it('clears the stashed event when appinstalled fires', () => {
    const store = createInstallPromptStore()
    const windowRef = buildWindow()
    store.capture({ windowRef })

    windowRef._fire('beforeinstallprompt', buildEvent())
    expect(store.getDeferredEvent()).not.toBeNull()

    windowRef._fire('appinstalled')
    expect(store.getDeferredEvent()).toBeNull()
  })

  it('promptInstall calls the stashed event.prompt(), clears it, and resolves the user choice', async () => {
    const store = createInstallPromptStore()
    const windowRef = buildWindow()
    store.capture({ windowRef })

    const event = buildEvent({ outcome: 'accepted' })
    windowRef._fire('beforeinstallprompt', event)

    const choice = await store.promptInstall()

    expect(event.prompt).toHaveBeenCalledTimes(1)
    expect(choice).toEqual({ outcome: 'accepted', platform: 'web' })
    expect(store.getDeferredEvent()).toBeNull()
  })

  it('promptInstall resolves null when nothing was stashed', async () => {
    const store = createInstallPromptStore()

    const choice = await store.promptInstall()

    expect(choice).toBeNull()
  })
})

describe('isStandalone', () => {
  it('is true when the display-mode: standalone media query matches', () => {
    const windowRef = {
      matchMedia: jest.fn(() => ({ matches: true }))
    }

    expect(isStandalone({ windowRef, navigatorRef: {} })).toBe(true)
    expect(windowRef.matchMedia).toHaveBeenCalledWith('(display-mode: standalone)')
  })

  it('is true on iOS when navigator.standalone is set', () => {
    const windowRef = { matchMedia: jest.fn(() => ({ matches: false })) }
    const navigatorRef = { standalone: true }

    expect(isStandalone({ windowRef, navigatorRef })).toBe(true)
  })

  it('is false in a regular browser tab', () => {
    const windowRef = { matchMedia: jest.fn(() => ({ matches: false })) }
    const navigatorRef = {}

    expect(isStandalone({ windowRef, navigatorRef })).toBe(false)
  })
})

describe('isIOSSafari', () => {
  it('detects iPhone Safari', () => {
    const navigatorRef = {
      platform: 'iPhone',
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/604.1',
      maxTouchPoints: 5
    }

    expect(isIOSSafari({ navigatorRef })).toBe(true)
  })

  it('detects iPadOS reporting as MacIntel with touch support', () => {
    const navigatorRef = {
      platform: 'MacIntel',
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/604.1',
      maxTouchPoints: 5
    }

    expect(isIOSSafari({ navigatorRef })).toBe(true)
  })

  it('is false for a real Mac (no touch points)', () => {
    const navigatorRef = {
      platform: 'MacIntel',
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/604.1',
      maxTouchPoints: 0
    }

    expect(isIOSSafari({ navigatorRef })).toBe(false)
  })

  it('is false for Chrome on iOS (CriOS) even though it runs on WebKit', () => {
    const navigatorRef = {
      platform: 'iPhone',
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/120.0 Mobile/15E148 Safari/604.1',
      maxTouchPoints: 5
    }

    expect(isIOSSafari({ navigatorRef })).toBe(false)
  })

  it('is false for Android Chrome', () => {
    const navigatorRef = {
      platform: 'Linux armv8l',
      userAgent: 'Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Mobile Safari/537.36',
      maxTouchPoints: 5
    }

    expect(isIOSSafari({ navigatorRef })).toBe(false)
  })

  it('is false when there is no navigatorRef', () => {
    expect(isIOSSafari({ navigatorRef: null })).toBe(false)
  })
})

describe('dismiss / isDismissed', () => {
  it('is not dismissed when nothing was ever stored', () => {
    const storageRef = buildStorage()

    expect(isDismissed({ storageRef, now: 1000 })).toBe(false)
  })

  it('is dismissed right after calling dismiss()', () => {
    const storageRef = buildStorage()

    dismiss({ storageRef, now: 1000 })

    expect(isDismissed({ storageRef, now: 1000 })).toBe(true)
    const stored = JSON.parse(storageRef.setItem.mock.calls[0][1])
    expect(stored).toEqual({ dismissedAt: 1000 })
  })

  it('stays dismissed just under the 30 day window', () => {
    const storageRef = buildStorage()
    const dismissedAt = 1_000_000
    const almost30Days = dismissedAt + 30 * 24 * 60 * 60 * 1000 - 1

    dismiss({ storageRef, now: dismissedAt })

    expect(isDismissed({ storageRef, now: almost30Days })).toBe(true)
  })

  it('is no longer dismissed once 30 days have passed', () => {
    const storageRef = buildStorage()
    const dismissedAt = 1_000_000
    const after30Days = dismissedAt + 30 * 24 * 60 * 60 * 1000

    dismiss({ storageRef, now: dismissedAt })

    expect(isDismissed({ storageRef, now: after30Days })).toBe(false)
  })

  it('treats a corrupt stored value as not dismissed', () => {
    const storageRef = buildStorage()
    storageRef.setItem(DISMISS_STORAGE_KEY, 'not-json{')

    expect(isDismissed({ storageRef, now: 1000 })).toBe(false)
  })

  it('does not throw when storage is unavailable', () => {
    const throwingStorage = {
      getItem: () => { throw new Error('blocked') },
      setItem: () => { throw new Error('blocked') }
    }

    expect(() => dismiss({ storageRef: throwingStorage, now: 1 })).not.toThrow()
    expect(isDismissed({ storageRef: throwingStorage, now: 1 })).toBe(false)
  })

  it('no-ops dismiss when there is no storageRef', () => {
    expect(() => dismiss({ storageRef: null, now: 1 })).not.toThrow()
  })
})
