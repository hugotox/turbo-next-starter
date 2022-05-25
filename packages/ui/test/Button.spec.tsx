import { renderWithProviders } from 'utils'

import { Button } from '../src/Button'

describe('index', () => {
  it('renders', () => {
    const { getByText } = renderWithProviders(<Button />)
    expect(getByText('Boop')).toBeInTheDocument()
  })
})
