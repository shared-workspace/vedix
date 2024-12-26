/**
 * main.ts and other plugins then mounts the App
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

import "virtual:uno.css"

registerPlugins(app)

app.mount('#app')
