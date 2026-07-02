import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App'
import { registerServiceWorker } from './utils/registerServiceWorker'
import { installPromptStore } from './utils/installPrompt'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)

// Real offline support (production only, see webpack.config.js for the
// Workbox precache/runtime-caching strategy). Also shows a dismissible
// "hay una versión nueva" toast when an update activates — it never
// reloads on its own, see src/utils/registerServiceWorker.js.
registerServiceWorker()

// `beforeinstallprompt` can fire before the InstallBanner (Home-only) ever
// mounts, so the capture has to be wired here at app boot — same reasoning
// as registerServiceWorker above. See src/utils/installPrompt.js.
installPromptStore.capture()
