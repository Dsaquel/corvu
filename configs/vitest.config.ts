/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import solidPlugin from 'vite-plugin-solid'

import { resolve } from "path";

const rootDir = resolve(__dirname);

export default defineConfig({
  plugins: [
    solidPlugin({
      hot: false,
      solid: { generate: 'dom', omitNestedClosingTags: false },
    }),
  ],
  test: {
    watch: false,
    isolate: false,
    passWithNoTests: true,
    environment: 'jsdom',
    globals: true,
  },
  resolve: {
    conditions: ['browser', 'development'],
    alias: {
      corvu: resolve(rootDir, "../packages/corvu")
    },
  },
})
