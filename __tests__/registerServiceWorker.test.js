import { registerServiceWorker } from '../src/utils/registerServiceWorker'

const buildNavigator = ({ withServiceWorker = true, register } = {}) => {
  if (!withServiceWorker) {
    return {}
  }

  return {
    serviceWorker: {
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
})
