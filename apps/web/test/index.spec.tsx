import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@hugotox/theme'
import { render } from '@testing-library/react'

import Index from '../src/pages/index'

describe('index', () => {
  it('renders', () => {
    const { getByText } = render(
      <ChakraProvider theme={theme}>
        <Index />
      </ChakraProvider>
    )
    expect(getByText('Turbo Next Starter')).toBeInTheDocument()
  })
})
