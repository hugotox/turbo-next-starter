import { render } from 'test-utils'

import Index from '../src/pages/index'
import { makeStore } from '../src/redux-store'

describe('index', () => {
  it('renders', () => {
    const { getByText } = render(<Index />, { store: makeStore() })
    expect(getByText('Turbo Next Starter')).toBeInTheDocument()
  })
})
