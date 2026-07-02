import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App'
import { registerServiceWorker } from './utils/registerServiceWorker'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)

// Real offline support (production only, see webpack.config.js for the
// Workbox precache/runtime-caching strategy).
registerServiceWorker()
