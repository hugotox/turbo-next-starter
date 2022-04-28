import { extendTheme, withDefaultColorScheme, Theme as ChakraTheme } from '@chakra-ui/react'

export const theme = extendTheme(
  {
    colors: {
      blue: {
        500: 'blue',
      },
    },
  },
  withDefaultColorScheme({ colorScheme: 'blue' })
)

export interface Theme extends ChakraTheme {}
