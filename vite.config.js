import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  esbuild: {
    jsxInject: `import { h } from 'vue'`,
    jsxFactory: 'h'
    // jsxFragment: 'Fragment'
  }
}
