import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { useApollo } from 'apollo-client'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { theme, globalStyle } from 'theme'

import { wrapper } from '../lib/store'

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)
  return (
    <SessionProvider refetchInterval={0} session={pageProps.session}>
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
    </SessionProvider>
  )
}

export default wrapper.withRedux(App)
