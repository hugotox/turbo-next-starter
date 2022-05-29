import { ChakraProvider } from '@chakra-ui/react'
import { Store, configureStore } from '@reduxjs/toolkit'
import { render, RenderOptions } from '@testing-library/react'
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
  return function WithChakraProvider({ children }: WithChildren) {
    return (
      <Provider store={store}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </Provider>
    )
  }
}

const renderWithProviders = (ui: ReactElement, options?: Omit<Options, 'wrapper'>) => {
  return render(ui, { wrapper: WithReduxProvider(options?.store ?? fallbackStore), ...options })
}

export { renderWithProviders }
