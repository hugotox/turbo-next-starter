import { useMemo } from 'react'

import { APOLLO_STATE_PROP_NAME } from './constants'
import { initializeApollo } from './initializeApollo'

export interface UseApolloOptions {
  accessToken: string
  uri: string
}

export const useApollo = (pageProps: any = {}, { accessToken, uri }: UseApolloOptions) => {
  const initialState = pageProps[APOLLO_STATE_PROP_NAME]
  const store = useMemo(
    () => initializeApollo({ accessToken, initialState, uri }),
    [accessToken, initialState, uri]
  )
  return store
}
