import '@emotion/react'
import { Theme as CustomTheme } from './src/theme'

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
