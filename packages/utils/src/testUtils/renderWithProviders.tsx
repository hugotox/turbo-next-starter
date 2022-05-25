import { ChakraProvider } from '@chakra-ui/react'
import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'
import { theme } from 'theme'

interface WithChildren {
  children?: ReactElement
}

const AllTheProviders = ({ children }: WithChildren) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

const renderWithProviders = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export { renderWithProviders }
