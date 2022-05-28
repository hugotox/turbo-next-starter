/* eslint-disable sort-keys */
import { extendTheme, withDefaultColorScheme, Theme as ChakraTheme } from '@chakra-ui/react'

import * as breakpoints from './breakpoints'

export const theme = extendTheme(
  {
    breakpoints: {
      sm: breakpoints.BREAKPOINT_SM,
      md: breakpoints.BREAKPOINT_MD,
      lg: breakpoints.BREAKPOINT_LG,
      xl: breakpoints.BREAKPOINT_XL,
      '2xl': breakpoints.BREAKPOINT_2XL,
    },
    colors: {
      // override colors here
    },
    fonts: {
      body: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
      heading:
        '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;',
      mono: "ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace",
    },
  },
  withDefaultColorScheme({ colorScheme: 'green' })
)

export interface Theme extends ChakraTheme {}
