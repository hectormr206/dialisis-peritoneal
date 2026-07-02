// registerServiceWorker: gates the real service-worker registration
// (Workbox-generated `service-worker.js`, see webpack.config.js) so it only
// runs in a production build with browser support. No service worker runs
// in development — hot reload and the dev server would otherwise fight
// stale caches.
//
// Dependencies are injectable (nodeEnv/navigatorRef/windowRef/onError) so
// the gating logic is unit-testable in jsdom without faking real browser
// service-worker behavior.

export function registerServiceWorker ({
  nodeEnv = process.env.NODE_ENV,
  navigatorRef = typeof navigator !== 'undefined' ? navigator : undefined,
  windowRef = typeof window !== 'undefined' ? window : undefined,
  onError = (error) => console.error('Service worker registration failed:', error)
} = {}) {
  const supportsServiceWorker =
    Boolean(navigatorRef) && 'serviceWorker' in navigatorRef

  if (nodeEnv !== 'production' || !supportsServiceWorker || !windowRef) {
    return false
  }

  windowRef.addEventListener('load', () => {
    return navigatorRef.serviceWorker
      .register('/service-worker.js')
      .catch(onError)
  })

  return true
}
