import { useMemo } from 'react'

import { APOLLO_STATE_PROP_NAME } from './constants'
import { initializeApollo } from './initializeApollo'

export const useApollo = (pageProps: any = {}, accessToken: string = '') => {
  const initialState = pageProps[APOLLO_STATE_PROP_NAME]
  const store = useMemo(
    () => initializeApollo({ accessToken, initialState }),
    [accessToken, initialState]
  )
  return store
}
