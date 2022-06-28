import { render } from './renderWithProviders'

describe('renderWithProviders', () => {
  it('works', () => {
    const { container } = render(<div>Hello</div>)
    expect(container.querySelector('.chakra-env')).toBeInTheDocument()
  })
})
