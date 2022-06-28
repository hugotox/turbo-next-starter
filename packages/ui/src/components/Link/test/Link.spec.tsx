import { render } from 'test-utils'

import { Link } from '../Link'

describe('Link', () => {
  it('renders', () => {
    const { getByText } = render(<Link href="/">Home</Link>)
    expect(getByText('Home')).toBeInTheDocument()
  })
})
