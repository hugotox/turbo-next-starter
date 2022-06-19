import { renderWithProviders } from 'utils'

import { Link } from '../Link'

describe('Link', () => {
  it('renders', () => {
    const { getByText } = renderWithProviders(<Link href="/">Home</Link>)
    expect(getByText('Home')).toBeInTheDocument()
  })
})
