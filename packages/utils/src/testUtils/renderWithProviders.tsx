import { ChakraProvider } from '@chakra-ui/react'
import { Store, configureStore } from '@reduxjs/toolkit'
import { RenderOptions, render } from '@testing-library/react'
import { NextIntlProvider } from 'next-intl'
import { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { theme } from 'theme'

const fallbackStore = configureStore({
  reducer: (state: any) => state,
})

interface WithChildren {
  children?: ReactElement
}

interface Options extends RenderOptions {
  store?: Store
}

const WithProviders = (store: Store) => {
  return function Wrapper({ children }: WithChildren) {
    return (
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <NextIntlProvider locale="en" messages={{}}>
            {children}
          </NextIntlProvider>
        </ChakraProvider>
      </Provider>
    )
  }
}

const renderWithProviders = (ui: ReactElement, options?: Omit<Options, 'wrapper'>) => {
  return render(ui, { wrapper: WithProviders(options?.store ?? fallbackStore), ...options })
}

export { renderWithProviders }
