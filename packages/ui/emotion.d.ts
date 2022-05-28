import '@emotion/react'
import { Theme as CustomTheme } from 'theme'

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}

declare module 'react' {
  interface Attributes {
    css?: Interpolation<CustomTheme>
  }
}
