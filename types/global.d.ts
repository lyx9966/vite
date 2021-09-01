import type {
  VNode,
  VNodeChild,
  ComponentPublicInstance,
  FunctionalComponent,
  PropType as VuePropType,
} from 'vue'

declare global {
  const __APP_INFO__: {
    pkg: {
      name: string
      version: string
      dependencies: Recordable<string>
      devDependencies: Recordable<string>
    }
    lastBuildTime: string
  }

  export type Writable<T> = {
    -readonly [P in keyof T]: T[P]
  }

  type PropType<T> = VuePropType<T>
  type VueNode = VNode | VNodeChild

  type Nullable<T> = T | null
  type Recordable<T = any> = Record<string, T>

  type TimeoutHandle = ReturnType<typeof setTimeout>
  type IntervalHandle = ReturnType<typeof setInterval>

  interface ChangeEvent extends Event {
    target: HTMLInputElement
  }

  interface WheelEvent {
    path?: EventTarget[]
  }

  interface ImportMetaEnv extends ViteEnv {
    _: unknown
  }
  interface ViteEnv {
    VITE_PORT: number
    VITE_PUBLIC_PATH: string
    VITE_PROXY: [string, string][]
    VITE_GLOB_APP_TITLE: string
    VITE_DROP_CONSOLE: boolean
    VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean
    VITE_LEGACY: boolean
    VITE_USE_IMAGEMIN: boolean
    VITE_GENERATE_UI: string
  }
}

declare module 'vue' {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>
}
