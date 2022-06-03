import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

export const createApolloClient = (uri: string, accessToken: string) => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      // Additional fetch() options like `credentials` or `headers`
      credentials: 'same-origin',
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
      uri,
    }),
    ssrMode: typeof window === 'undefined',
  })
}
