import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

import { FAUNA_GRAPHQL_BASE_URL } from './constants'

export const createApolloClient = (accessToken: string) => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      // Additional fetch() options like `credentials` or `headers`
      credentials: 'same-origin',
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
      uri: FAUNA_GRAPHQL_BASE_URL,
    }),
    ssrMode: typeof window === 'undefined',
  })
}
