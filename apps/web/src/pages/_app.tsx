import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { useApollo } from 'apollo-client'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { theme, globalStyle } from 'theme'

import { wrapper } from '../lib/store'

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)
  return (
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
  )
}

export default wrapper.withRedux(App)
