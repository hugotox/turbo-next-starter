import { Theme as ChakraTheme, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

import { Button, Heading, Link } from './componentStyles'

export type ColorNames = keyof ChakraTheme['colors']

export interface Theme extends ChakraTheme {}

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
      heading: 'Open Sans, Helvetica, Arial, sans-serif',
    },
    initialColorMode: 'light',
    shadows: {
      outline: '0 0 0 3px var(--chakra-colors-gray-300)',
    },
    useSystemColorMode: true,
  },
  withDefaultColorScheme({ colorScheme: 'blue' })
)
