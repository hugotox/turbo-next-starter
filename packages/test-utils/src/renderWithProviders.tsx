/* eslint-disable import/export */
import { ChakraProvider } from '@chakra-ui/react'
import { Store, configureStore } from '@reduxjs/toolkit'
import { RenderOptions, render } from '@testing-library/react'
import enLang from 'lang/en.json'
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

const WithReduxProvider = (store: Store) => {
  return function AllProviders({ children }: WithChildren) {
    return (
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <NextIntlProvider locale="en" messages={enLang}>
            {children}
          </NextIntlProvider>
        </ChakraProvider>
      </Provider>
    )
  }
}

const renderWithProviders = (ui: ReactElement, options?: Omit<Options, 'wrapper'>) => {
  return render(ui, { wrapper: WithReduxProvider(options?.store ?? fallbackStore), ...options })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { renderWithProviders as render }
