import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import merge from 'deepmerge'
import isEqual from 'lodash/isEqual'

import { createApolloClient } from './createApolloClient'

let apolloClient: ApolloClient<NormalizedCacheObject>

export interface InitializeApolloProps {
  accessToken: string
  initialState?: any | null
  uri: string
}

export const initializeApollo = ({
  accessToken,
  initialState = null,
  uri,
}: InitializeApolloProps) => {
  const _apolloClient = apolloClient ?? createApolloClient(uri, accessToken)

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
    const data = merge(existingCache, initialState, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s))),
      ],
    })

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') {
    return _apolloClient
  }
  // Create the Apollo Client once in the client only with a valid access token
  if (!apolloClient && accessToken && uri) {
    apolloClient = _apolloClient
  }

  return _apolloClient
}
