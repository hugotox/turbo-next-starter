
import { theme } from 'theme'
import * as NextImage from 'next/image'
import './global.css'

const OriginalNextImage = NextImage.default

// Fix next.js image in storybook
// https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
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

