import React from 'react'
import { Global } from '@emotion/react'
import { theme, globalStyle } from 'theme'
import * as NextImage from 'next/image'
import { ChakraProvider } from '@chakra-ui/react'

const OriginalNextImage = NextImage.default

// Fix next.js image in storybook
// https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },

  // https://github.com/chakra-ui/chakra-ui/issues/2694#issuecomment-1005198077
  chakra: {
    theme,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Global styles={globalStyle} />
      <Story />
    </ChakraProvider>
  ),
]
