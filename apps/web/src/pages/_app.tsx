import { ApolloProvider } from '@apollo/client'
import { UserProvider } from '@auth0/nextjs-auth0'
import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { useApollo } from 'apollo-client'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { theme, globalStyle } from 'theme'

import { wrapper } from '../redux-store'

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)
  return (
    <UserProvider>
      <ApolloProvider client={apolloClient}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <title>Turbo/Next/Chakra App</title>
        </Head>
        <ChakraProvider theme={theme}>
          <Global styles={globalStyle} />
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </UserProvider>
  )
}

export default wrapper.withRedux(App)
