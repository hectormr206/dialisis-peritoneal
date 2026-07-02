import React from 'react'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { InstallBanner } from '../src/components/InstallBanner'
import { DISMISS_STORAGE_KEY } from '../src/utils/installPrompt'

const buildStore = ({ deferredEvent = null } = {}) => ({
  getDeferredEvent: jest.fn(() => deferredEvent),
  subscribe: jest.fn(() => jest.fn()),
  promptInstall: jest.fn().mockResolvedValue({ outcome: 'accepted' })
})

const buildWindow = ({ standalone = false } = {}) => ({
  matchMedia: jest.fn(() => ({ matches: standalone }))
})

const iosNavigator = {
  platform: 'iPhone',
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/604.1',
  maxTouchPoints: 5
}

const androidNavigator = {
  platform: 'Linux armv8l',
  userAgent: 'Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Mobile Safari/537.36',
  maxTouchPoints: 5
}

const buildStorage = () => {
  const data = {}
  return {
    getItem: jest.fn((key) => (key in data ? data[key] : null)),
    setItem: jest.fn((key, value) => {
      data[key] = value
    })
  }
}

describe('InstallBanner', () => {
  it('shows the "Instalar" button when a beforeinstallprompt event is stashed', () => {
    const store = buildStore({ deferredEvent: {} })

    render(
      <InstallBanner
        store={store}
        windowRef={buildWindow()}
        navigatorRef={androidNavigator}
        storageRef={buildStorage()}
        now={() => 1000}
      />
    )

    expect(
      screen.getByText('Instala Mi Diálisis en tu teléfono')
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Instalar' })).toBeInTheDocument()
  })

  it('calls store.promptInstall() when "Instalar" is tapped', async () => {
    const user = userEvent.setup()
    const store = buildStore({ deferredEvent: {} })

    render(
      <InstallBanner
        store={store}
        windowRef={buildWindow()}
        navigatorRef={androidNavigator}
        storageRef={buildStorage()}
        now={() => 1000}
      />
    )

    await user.click(screen.getByRole('button', { name: 'Instalar' }))

    expect(store.promptInstall).toHaveBeenCalledTimes(1)
  })

  it('hides itself and persists the dismissal when "Ahora no" is tapped', async () => {
    const user = userEvent.setup()
    const store = buildStore({ deferredEvent: {} })
    const storageRef = buildStorage()

    render(
      <InstallBanner
        store={store}
        windowRef={buildWindow()}
        navigatorRef={androidNavigator}
        storageRef={storageRef}
        now={() => 1000}
      />
    )

    await user.click(
      screen.getByRole('button', { name: 'Cerrar aviso de instalación' })
    )

    expect(
      screen.queryByText('Instala Mi Diálisis en tu teléfono')
    ).not.toBeInTheDocument()

    const stored = JSON.parse(storageRef.setItem.mock.calls[0][1])
    expect(stored).toEqual({ dismissedAt: 1000 })
    expect(storageRef.setItem.mock.calls[0][0]).toBe(DISMISS_STORAGE_KEY)
  })

  it('renders nothing when it was dismissed less than 30 days ago', () => {
    const store = buildStore({ deferredEvent: {} })
    const storageRef = buildStorage()
    storageRef.setItem(
      DISMISS_STORAGE_KEY,
      JSON.stringify({ dismissedAt: 1000 })
    )

    const { container } = render(
      <InstallBanner
        store={store}
        windowRef={buildWindow()}
        navigatorRef={androidNavigator}
        storageRef={storageRef}
        now={() => 1000 + 24 * 60 * 60 * 1000}
      />
    )

    expect(container).toBeEmptyDOMElement()
  })

  it('shows the install button again once the dismissal has expired (30+ days)', () => {
    const store = buildStore({ deferredEvent: {} })
    const storageRef = buildStorage()
    const dismissedAt = 1000
    storageRef.setItem(
      DISMISS_STORAGE_KEY,
      JSON.stringify({ dismissedAt })
    )

    render(
      <InstallBanner
        store={store}
        windowRef={buildWindow()}
        navigatorRef={androidNavigator}
        storageRef={storageRef}
        now={() => dismissedAt + 31 * 24 * 60 * 60 * 1000}
      />
    )

    expect(screen.getByRole('button', { name: 'Instalar' })).toBeInTheDocument()
  })

  it('renders nothing when the app is already running standalone', () => {
    const store = buildStore({ deferredEvent: {} })

    const { container } = render(
      <InstallBanner
        store={store}
        windowRef={buildWindow({ standalone: true })}
        navigatorRef={androidNavigator}
        storageRef={buildStorage()}
        now={() => 1000}
      />
    )

    expect(container).toBeEmptyDOMElement()
  })

  it('shows manual iOS instructions when there is no stashed event but the browser is iOS Safari', () => {
    const store = buildStore({ deferredEvent: null })

    render(
      <InstallBanner
        store={store}
        windowRef={buildWindow()}
        navigatorRef={iosNavigator}
        storageRef={buildStorage()}
        now={() => 1000}
      />
    )

    expect(
      screen.getByText('Instala Mi Diálisis en tu teléfono')
    ).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Instalar' })).not.toBeInTheDocument()
    expect(screen.getByText(/Compartir/)).toBeInTheDocument()
    expect(screen.getByText(/Agregar a pantalla de inicio/)).toBeInTheDocument()
  })

  it('renders nothing when there is no stashed event and the browser is not iOS Safari', () => {
    const store = buildStore({ deferredEvent: null })

    const { container } = render(
      <InstallBanner
        store={store}
        windowRef={buildWindow()}
        navigatorRef={androidNavigator}
        storageRef={buildStorage()}
        now={() => 1000}
      />
    )

    expect(container).toBeEmptyDOMElement()
  })

  it('subscribes to the store and updates visibility when it notifies (event captured after mount)', () => {
    let notify
    const store = {
      getDeferredEvent: jest.fn(() => null),
      subscribe: jest.fn((listener) => {
        notify = listener
        return jest.fn()
      }),
      promptInstall: jest.fn()
    }

    render(
      <InstallBanner
        store={store}
        windowRef={buildWindow()}
        navigatorRef={androidNavigator}
        storageRef={buildStorage()}
        now={() => 1000}
      />
    )

    expect(screen.queryByRole('button', { name: 'Instalar' })).not.toBeInTheDocument()

    store.getDeferredEvent.mockReturnValue({})
    act(() => {
      notify()
    })

    expect(screen.getByRole('button', { name: 'Instalar' })).toBeInTheDocument()
  })
})
