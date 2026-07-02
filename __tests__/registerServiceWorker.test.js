import { registerServiceWorker, showUpdateNotice } from '../src/utils/registerServiceWorker'

const buildInstallingWorker = () => {
  const listeners = {}
  return {
    state: 'installing',
    addEventListener: jest.fn((event, handler) => {
      listeners[event] = handler
    }),
    _fireStateChange (state) {
      this.state = state
      listeners.statechange && listeners.statechange()
    }
  }
}

const buildRegistration = ({ installing } = {}) => {
  const listeners = {}
  return {
    installing,
    addEventListener: jest.fn((event, handler) => {
      listeners[event] = handler
    }),
    _fireUpdateFound () {
      listeners.updatefound && listeners.updatefound()
    }
  }
}

const buildNavigator = ({ withServiceWorker = true, register, controller = null } = {}) => {
  if (!withServiceWorker) {
    return {}
  }

  return {
    serviceWorker: {
      controller,
      register: register || jest.fn().mockResolvedValue({ scope: '/' })
    }
  }
}

const buildWindow = () => ({
  addEventListener: jest.fn()
})

describe('registerServiceWorker', () => {
  it('does nothing outside production', () => {
    const windowRef = buildWindow()
    const navigatorRef = buildNavigator()

    const result = registerServiceWorker({
      nodeEnv: 'development',
      navigatorRef,
      windowRef
    })

    expect(result).toBe(false)
    expect(windowRef.addEventListener).not.toHaveBeenCalled()
  })

  it('does nothing when the browser has no serviceWorker support', () => {
    const windowRef = buildWindow()
    const navigatorRef = buildNavigator({ withServiceWorker: false })

    const result = registerServiceWorker({
      nodeEnv: 'production',
      navigatorRef,
      windowRef
    })

    expect(result).toBe(false)
    expect(windowRef.addEventListener).not.toHaveBeenCalled()
  })

  it('registers the service worker on window load in production', () => {
    const windowRef = buildWindow()
    const register = jest.fn().mockResolvedValue({ scope: '/' })
    const navigatorRef = buildNavigator({ register })

    const result = registerServiceWorker({
      nodeEnv: 'production',
      navigatorRef,
      windowRef
    })

    expect(result).toBe(true)
    expect(windowRef.addEventListener).toHaveBeenCalledWith(
      'load',
      expect.any(Function)
    )

    const loadHandler = windowRef.addEventListener.mock.calls[0][1]
    loadHandler()

    expect(register).toHaveBeenCalledWith('/service-worker.js')
  })

  it('does not throw when registration fails', async () => {
    const windowRef = buildWindow()
    const registrationError = new Error('registration failed')
    const register = jest.fn().mockRejectedValue(registrationError)
    const navigatorRef = buildNavigator({ register })
    const onError = jest.fn()

    registerServiceWorker({
      nodeEnv: 'production',
      navigatorRef,
      windowRef,
      onError
    })

    const loadHandler = windowRef.addEventListener.mock.calls[0][1]
    await loadHandler()

    expect(onError).toHaveBeenCalledWith(registrationError)
  })

  describe('update notice', () => {
    it('calls onUpdateAvailable when a new worker activates on an already-controlled page', async () => {
      const windowRef = buildWindow()
      const installingWorker = buildInstallingWorker()
      const registration = buildRegistration({ installing: installingWorker })
      const register = jest.fn().mockResolvedValue(registration)
      // A truthy controller means the page was already running a previous
      // service worker — this is a real update, not the first install.
      const navigatorRef = buildNavigator({ register, controller: {} })
      const onUpdateAvailable = jest.fn()

      registerServiceWorker({
        nodeEnv: 'production',
        navigatorRef,
        windowRef,
        onUpdateAvailable
      })

      const loadHandler = windowRef.addEventListener.mock.calls[0][1]
      await loadHandler()

      registration._fireUpdateFound()
      installingWorker._fireStateChange('installed')
      expect(onUpdateAvailable).not.toHaveBeenCalled()

      installingWorker._fireStateChange('activated')
      expect(onUpdateAvailable).toHaveBeenCalledTimes(1)
    })

    it('does not call onUpdateAvailable for the very first install (no prior controller)', async () => {
      const windowRef = buildWindow()
      const installingWorker = buildInstallingWorker()
      const registration = buildRegistration({ installing: installingWorker })
      const register = jest.fn().mockResolvedValue(registration)
      // No controller yet — this is the first-ever install for this
      // visitor, not an update. Must never prompt "hay una nueva versión"
      // the first time someone opens the app.
      const navigatorRef = buildNavigator({ register, controller: null })
      const onUpdateAvailable = jest.fn()

      registerServiceWorker({
        nodeEnv: 'production',
        navigatorRef,
        windowRef,
        onUpdateAvailable
      })

      const loadHandler = windowRef.addEventListener.mock.calls[0][1]
      await loadHandler()

      registration._fireUpdateFound()
      installingWorker._fireStateChange('activated')

      expect(onUpdateAvailable).not.toHaveBeenCalled()
    })

    it('defaults to showUpdateNotice when no onUpdateAvailable override is passed', async () => {
      const windowRef = buildWindow()
      const documentRef = document.implementation.createHTMLDocument()
      const installingWorker = buildInstallingWorker()
      const registration = buildRegistration({ installing: installingWorker })
      const register = jest.fn().mockResolvedValue(registration)
      const navigatorRef = buildNavigator({ register, controller: {} })

      registerServiceWorker({
        nodeEnv: 'production',
        navigatorRef,
        windowRef,
        documentRef
      })

      const loadHandler = windowRef.addEventListener.mock.calls[0][1]
      await loadHandler()

      registration._fireUpdateFound()
      installingWorker._fireStateChange('activated')

      expect(documentRef.getElementById('sw-update-toast')).not.toBeNull()
    })
  })
})

describe('showUpdateNotice', () => {
  const getToast = (documentRef) => documentRef.getElementById('sw-update-toast')

  it('injects a toast with the update text and an "Actualizar" button', () => {
    const documentRef = document.implementation.createHTMLDocument()

    showUpdateNotice({ documentRef, windowRef: buildWindow() })

    const toast = getToast(documentRef)
    expect(toast).not.toBeNull()
    expect(toast.textContent).toContain('Hay una versión nueva de la guía.')

    const updateButton = Array.from(toast.querySelectorAll('button'))
      .find((btn) => btn.textContent === 'Actualizar')
    expect(updateButton).toBeDefined()
  })

  it('calls the reload callback only when the update button is tapped, never automatically', () => {
    const documentRef = document.implementation.createHTMLDocument()
    const onUpdate = jest.fn()

    showUpdateNotice({ documentRef, onUpdate })

    expect(onUpdate).not.toHaveBeenCalled()

    const toast = getToast(documentRef)
    const updateButton = Array.from(toast.querySelectorAll('button'))
      .find((btn) => btn.textContent === 'Actualizar')
    updateButton.click()

    expect(onUpdate).toHaveBeenCalledTimes(1)
  })

  it('dismiss button removes the toast without reloading', () => {
    const documentRef = document.implementation.createHTMLDocument()
    const onUpdate = jest.fn()

    showUpdateNotice({ documentRef, onUpdate })

    const toast = getToast(documentRef)
    const dismissButton = toast.querySelector('[aria-label="Cerrar aviso de actualización"]')
    dismissButton.click()

    expect(onUpdate).not.toHaveBeenCalled()
    expect(getToast(documentRef)).toBeNull()
  })

  it('never stacks a second toast while one is already visible', () => {
    const documentRef = document.implementation.createHTMLDocument()

    showUpdateNotice({ documentRef, windowRef: buildWindow() })
    showUpdateNotice({ documentRef, windowRef: buildWindow() })

    expect(documentRef.querySelectorAll('#sw-update-toast').length).toBe(1)
  })

  it('falls back to reloading windowRef.location when no onUpdate is given', () => {
    const documentRef = document.implementation.createHTMLDocument()
    const reload = jest.fn()
    const windowRef = { location: { reload } }

    showUpdateNotice({ documentRef, windowRef })

    const toast = getToast(documentRef)
    const updateButton = Array.from(toast.querySelectorAll('button'))
      .find((btn) => btn.textContent === 'Actualizar')
    updateButton.click()

    expect(reload).toHaveBeenCalledTimes(1)
  })
})
