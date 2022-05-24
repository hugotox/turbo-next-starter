import { useMemo } from 'react'

import { APOLLO_STATE_PROP_NAME } from './constants'
import { initializeApollo } from './initializeApollo'

export function useApollo(pageProps: any = {}) {
  const initialState = pageProps[APOLLO_STATE_PROP_NAME]
  const accessToken = pageProps.accessToken
  const store = useMemo(
    () => initializeApollo({ accessToken, initialState }),
    [accessToken, initialState]
  )
  return store
}
