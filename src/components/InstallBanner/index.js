import React, { useCallback, useEffect, useState } from 'react'
import {
  BannerAside,
  BannerIcon,
  BannerBody,
  BannerTitle,
  BannerText,
  StepsList,
  BannerActions,
  InstallButton,
  DismissButton
} from './styles'
import {
  installPromptStore,
  isStandalone,
  isIOSSafari,
  isDismissed,
  dismiss
} from '../../utils/installPrompt'

// Home-only promo card offering to install the PWA — R "the app must offer
// installation itself" (Chrome no longer reliably shows its own automatic
// install prompt, and this audience will never find the browser's ⋮ menu).
//
// Every dependency is injectable (store/windowRef/navigatorRef/storageRef/
// now), same DI-friendly shape as the rest of src/utils, so every visible
// state is reachable in tests without faking real browser install-prompt
// behavior.
const resolveVisibility = ({ store, windowRef, navigatorRef, storageRef, now }) => {
  if (isStandalone({ windowRef, navigatorRef })) {
    return 'hidden'
  }

  if (isDismissed({ storageRef, now: now() })) {
    return 'hidden'
  }

  if (store.getDeferredEvent()) {
    return 'installable'
  }

  if (isIOSSafari({ navigatorRef })) {
    return 'ios'
  }

  return 'hidden'
}

export const InstallBanner = ({
  store = installPromptStore,
  windowRef = typeof window !== 'undefined' ? window : undefined,
  navigatorRef = typeof navigator !== 'undefined' ? navigator : undefined,
  storageRef = typeof window !== 'undefined' ? window.localStorage : undefined,
  now = () => Date.now()
} = {}) => {
  const resolve = useCallback(
    () => resolveVisibility({ store, windowRef, navigatorRef, storageRef, now }),
    [store, windowRef, navigatorRef, storageRef, now]
  )

  const [visibility, setVisibility] = useState(resolve)

  useEffect(() => {
    setVisibility(resolve())
    return store.subscribe(() => setVisibility(resolve()))
  }, [store, resolve])

  const handleInstall = useCallback(() => {
    store.promptInstall().then(() => setVisibility(resolve()))
  }, [store, resolve])

  const handleDismiss = useCallback(() => {
    dismiss({ storageRef, now: now() })
    setVisibility('hidden')
  }, [storageRef, now])

  if (visibility === 'hidden') {
    return null
  }

  return (
    <BannerAside aria-label='Instalar la aplicación'>
      <BannerIcon src='/android-icon-96x96.png' alt='' aria-hidden='true' />
      <BannerBody>
        <BannerTitle>Instala Mi Diálisis en tu teléfono</BannerTitle>

        {visibility === 'installable' && (
          <>
            <BannerText>
              Se abre como una app y funciona sin internet.
            </BannerText>
            <BannerActions>
              <InstallButton type='button' onClick={handleInstall}>
                Instalar
              </InstallButton>
              <DismissButton
                type='button'
                onClick={handleDismiss}
                aria-label='Cerrar aviso de instalación'
              >
                Ahora no
              </DismissButton>
            </BannerActions>
          </>
        )}

        {visibility === 'ios' && (
          <>
            <StepsList aria-label='Pasos para instalar en iPhone o iPad'>
              <li>
                1. Toca <strong>Compartir</strong> (el cuadrito con flecha)
              </li>
              <li>
                2. Toca <strong>&quot;Agregar a pantalla de inicio&quot;</strong>
              </li>
            </StepsList>
            <BannerActions>
              <DismissButton
                type='button'
                onClick={handleDismiss}
                aria-label='Cerrar aviso de instalación'
              >
                Ahora no
              </DismissButton>
            </BannerActions>
          </>
        )}
      </BannerBody>
    </BannerAside>
  )
}
