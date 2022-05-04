import { extendTheme, withDefaultColorScheme, Theme as ChakraTheme } from '@chakra-ui/react'

export const theme = extendTheme(
  {
    colors: {
      blue: {
        500: 'blue',
      },
    },
    fonts: {
      body: 'Arial, sans-serif',
      heading: 'Open Sans, sans-serif',
    },
  },
  withDefaultColorScheme({ colorScheme: 'blue' })
)

export interface Theme extends ChakraTheme {}
