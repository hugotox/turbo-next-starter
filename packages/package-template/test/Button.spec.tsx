import { Button } from '@chakra-ui/react'
import { render } from 'test-utils'

describe('ui/Button', () => {
  it('renders', () => {
    const { getByText } = render(<Button>Boop</Button>)
    expect(getByText('Boop')).toBeInTheDocument()
  })
})
