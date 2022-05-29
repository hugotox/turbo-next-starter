import { Button } from '@chakra-ui/react'
import { renderWithProviders } from 'utils'

describe('index', () => {
  it('renders', () => {
    const { getByText } = renderWithProviders(<Button>Boop</Button>)
    expect(getByText('Boop')).toBeInTheDocument()
  })
})
