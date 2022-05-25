import { renderWithProviders } from 'utils'

import Index from '../src/pages/index'

describe('index', () => {
  it('renders', () => {
    const { getByText } = renderWithProviders(<Index />)
    expect(getByText('Turbo Next Starter')).toBeInTheDocument()
  })
})
