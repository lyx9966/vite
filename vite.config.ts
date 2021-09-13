import type { UserConfig, ConfigEnv } from 'vite'

import { loadEnv } from 'vite'
import { resolve } from 'path'

import { createProxy } from './build/vite/proxy'
import { wrapperEnv } from './build/utils'
import { createVitePlugins } from './build/vite/plugin'
import { OUTPUT_DIR } from './build/constant'

import pkg from './package.json'
import moment from 'moment'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

const { dependencies, devDependencies, name, version } = pkg
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: moment().format('YYYY-MM-DD HH:mm:ss'),
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()

  const env = loadEnv(mode, root)

  // The boolean type read by loadEnv is a string. This function can be converted to boolean type
  const viteEnv = wrapperEnv(env)

  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv

  const isBuild = command === 'build'

  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: [
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
        // ['@vue/compiler-sfc', '@vue/compiler-sfc/dist/compiler-sfc.esm-browser.js'],
      ],
    },
    server: {
      host: true,
      port: VITE_PORT,
      open: true,
      proxy: createProxy(VITE_PROXY),
    },
    build: {
      target: 'es2015',
      outDir: OUTPUT_DIR,
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: VITE_DROP_CONSOLE,
        },
      },
      brotliSize: false,
      rollupOptions: {
        output: {
          manualChunks: {
            'element-plus': ['element-plus'],
          },
        },
      },
      chunkSizeWarningLimit: 2000,
    },
    define: {
      __INTLIFY_PROD_DEVTOOLS__: false,
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    css: {
      postcss: {
        plugins: [require('autoprefixer'), require('tailwindcss'), require('postcss-nested')],
      },
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: `@import "./src/styles/index.scss";`,
        },
      },
    },

    plugins: createVitePlugins(viteEnv, isBuild),

    optimizeDeps: {
      include: ['@iconify/iconify', 'moment/dist/locale/zh-cn', 'moment/dist/locale/eu'],
      exclude: ['vue-demi'],
    },
  }
}
