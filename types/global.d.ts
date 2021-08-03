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

  interface ViteEnv {
    VITE_PORT: number
    VITE_PUBLIC_PATH: string
    VITE_PROXY: [string, string][]
    VITE_DROP_CONSOLE: boolean
  }
}

declare module 'vue' {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>
}
