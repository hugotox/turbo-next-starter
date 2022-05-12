import { ApolloClient, NormalizedCacheObject } from '@apollo/client'

import { APOLLO_STATE_PROP_NAME } from './constants'

export function addApolloState(client: ApolloClient<NormalizedCacheObject>, pageProps: any) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}
