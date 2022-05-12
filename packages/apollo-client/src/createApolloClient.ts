import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

import { FAUNA_CLIENT_SECRET, FAUNA_GRAPHQL_BASE_URL } from './constants'

export function createApolloClient() {
  return new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            //listables: concatPagination(),
          },
        },
      },
    }),
    link: new HttpLink({
      // Additional fetch() options like `credentials` or `headers`
      credentials: 'same-origin',
      headers: {
        authorization: `Bearer ${FAUNA_CLIENT_SECRET}`,
      },
      uri: FAUNA_GRAPHQL_BASE_URL,
    }),
    ssrMode: typeof window === 'undefined',
  })
}
