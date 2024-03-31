/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import solidPlugin from 'vite-plugin-solid'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    solidPlugin({
      hot: false,
      solid: { generate: 'dom', omitNestedClosingTags: false },
    }),
    tsconfigPaths()
  ],
  test: {
    watch: false,
    isolate: false,
    passWithNoTests: true,
    environment: 'jsdom',
    globals: true,
    setupFiles: ['../node_modules/@testing-library/jest-dom/vitest'],
  },
  resolve: {
    conditions: ['browser', 'development']
  },
})
