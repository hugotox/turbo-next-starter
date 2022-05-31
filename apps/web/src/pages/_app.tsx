import { ApolloProvider } from '@apollo/client'
import { UserProvider } from '@auth0/nextjs-auth0'
import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { useApollo } from 'apollo-client'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import { theme, globalStyle } from 'theme'

import { Layout } from '../components/Layout'
import { useAppDispatch, useAppSelector, wrapper } from '../redux-store'
import { selectAccessToken, setAccessToken } from '../redux-store/appSlice'

function App({ Component, pageProps }: AppProps) {
  const dispatch = useAppDispatch()
  const accessToken = useAppSelector(selectAccessToken)
  const apolloClient = useApollo(pageProps, accessToken)

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const resp = await fetch('/api/auth/access-token')
        const data = await resp?.json()
        if (data?.accessToken) {
          dispatch(setAccessToken(data.accessToken))
        }
      } catch {}
    }
    fetchToken()
  }, [dispatch])

  return (
    <UserProvider>
      <ApolloProvider client={apolloClient}>
        <ChakraProvider theme={theme}>
          <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <title>Turbo/Next/Chakra App</title>
          </Head>
          <Global styles={globalStyle} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </ApolloProvider>
    </UserProvider>
  )
}

export default wrapper.withRedux(App)
