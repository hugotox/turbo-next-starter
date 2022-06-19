// https://chakra-ui.com/docs/styled-system/theming/component-style#styling-single-part-components

import type { ComponentStyleConfig } from '@chakra-ui/theme'

export const Link: ComponentStyleConfig = {
  baseStyle: {
    _hover: {
      textDecorationColor: 'initial',
    },
    textDecoration: 'underline auto rgba(0, 0, 0, 0);',
    transitionDuration: 'var(--chakra-transition-duration-fast)',
    transitionProperty: 'text-decoration-color',
  },
}
