import { renderWithProviders } from 'utils'

import Index from '../src/pages/index'
import { makeStore } from '../src/redux-store'

describe('index', () => {
  it('renders', () => {
    const { getByText } = renderWithProviders(<Index />, { store: makeStore() })
    expect(getByText('Home.heading')).toBeInTheDocument()
  })
})
