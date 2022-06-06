import { useMemo } from 'react'

import { APOLLO_STATE_PROP_NAME } from './constants'
import { initializeApollo } from './initializeApollo'

export interface UseApolloOptions {
  accessToken: string
}

export const useApollo = (pageProps: any = {}, { accessToken }: UseApolloOptions) => {
  const initialState = pageProps[APOLLO_STATE_PROP_NAME]
  const store = useMemo(
    () => initializeApollo({ accessToken, initialState }),
    [accessToken, initialState]
  )
  return store
}
