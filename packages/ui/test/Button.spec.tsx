import { ChakraProvider } from '@chakra-ui/react'
import { render } from '@testing-library/react'
import { theme } from 'theme'

import { Button } from '../src/Button'

describe('index', () => {
  it('renders', () => {
    const { getByText } = render(
      <ChakraProvider theme={theme}>
        <Button />
      </ChakraProvider>
    )
    expect(getByText('Boop')).toBeInTheDocument()
  })
})
