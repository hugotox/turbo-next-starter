import { Theme as ChakraTheme, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

import { Button, Heading, Link } from './componentStyles'

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
      Heading,
      Link,
    },
    fonts: {
      body: 'Open Sans, Helvetica, Arial, sans-serif',
      heading: 'Open Sans, Helvetica, Arial, sans-serif;',
      mono: "ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace",
    },
    initialColorMode: 'light',
    shadows: {
      outline: '0 0 0 3px var(--chakra-colors-gray-300)',
    },
    useSystemColorMode: true,
  },
  withDefaultColorScheme({ colorScheme: COLOR_SCHEME })
)
