/* eslint-disable sort-keys */
import { Theme as ChakraTheme, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

import { Button, Link } from './componentStyles'

export type ColorNames = keyof ChakraTheme['colors']

export interface Theme extends ChakraTheme {}

export const COLOR_SCHEME: ColorNames = 'blue'

export const theme = extendTheme(
  {
    colors: {
      // override colors here
    },
    components: {
      Button,
      Link,
    },
    fonts: {
      body: '"Titillium Web", Helvetica, Arial, "Lucida Grande", sans-serif',
      heading: '"Titillium Web", Helvetica, Arial, "Lucida Grande", sans-serif;',
      mono: "ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace",
    },
    shadows: {
      outline: '0 0 0 3px var(--chakra-colors-gray-300)',
    },
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  withDefaultColorScheme({ colorScheme: COLOR_SCHEME })
)
