import { ApolloProvider } from '@apollo/client'
import { UserProvider } from '@auth0/nextjs-auth0'
import { ChakraProvider } from '@chakra-ui/react'
import { NextIntlProvider } from 'next-intl'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { theme } from 'theme'
import { useEffectOnce } from 'utils'
import { useApollo } from 'web-apollo'

import { useAppDispatch, useAppSelector, wrapper } from '../lib/store'
import { selectAccessToken, setAccessToken } from '../lib/store/appSlice'

function App({ Component, pageProps }: AppProps) {
  const dispatch = useAppDispatch()
  const accessToken = useAppSelector(selectAccessToken)
  const apolloClient = useApollo(pageProps, { accessToken })

  useEffectOnce(() => {
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
  })

  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <NextIntlProvider messages={pageProps.messages}>
          <UserProvider>
            <Head>
              <meta content="width=device-width, initial-scale=1" name="viewport" />
              <title>Customer App</title>
            </Head>
            <Component {...pageProps} />
          </UserProvider>
        </NextIntlProvider>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default wrapper.withRedux(App)
