import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vuetify from 'vite-plugin-vuetify'

// https://vite.dev/config/
export default defineConfig({
  // Served from a GitHub Pages project path, not a domain root.
  base: '/dashboard/',
  plugins: [
    vue(),
    vueDevTools(),
    // Vuetify: globally auto-imports all v-* components
    vuetify({ autoImport: true }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // vue-chartist bundles Chartist as CommonJS, which references the Node
  // `global`. Browsers don't have it, so the dependency throws at import time
  // and takes app.mount() down with it.
  define: {
    global: 'globalThis',
  },
  optimizeDeps: {
    include: [
      'vuetify/components/VOverlay',
      'vuetify/components/VDialog',
      'vuetify/components/VMenu',
      'vuetify/components/VSelect',
      'vuetify/components/VTooltip',
      'vue-chartist',
      'chartist',
    ],
    // The throw happens inside the pre-bundled dependency, so the define has
    // to reach esbuild's optimize pass too — not just the app transform.
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
})
