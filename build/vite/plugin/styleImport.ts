/**
 *  引入elementui样式
 */

import styleImport from 'vite-plugin-style-import'

export function configStyleImportPlugin(isBuild: boolean) {
  if (!isBuild) return []
  const styleImportPlugin = styleImport({
    libs: [
      {
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          name = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`
        },
      },
    ],
  })
  return styleImportPlugin
}
