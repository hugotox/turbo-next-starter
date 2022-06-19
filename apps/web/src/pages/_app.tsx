import { ApolloProvider } from '@apollo/client'
import { UserProvider } from '@auth0/nextjs-auth0'
import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { NextIntlProvider } from 'next-intl'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { globalStyle, theme } from 'theme'
import { useEffectOnce } from 'utils'
import { useApollo } from 'web-apollo'

import { Layout } from '../components/Layout'
import { useAppDispatch, useAppSelector, wrapper } from '../redux-store'
import { selectAccessToken, setAccessToken } from '../redux-store/appSlice'

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
    <UserProvider>
      <ApolloProvider client={apolloClient}>
        <NextIntlProvider messages={pageProps.messages}>
          <ChakraProvider theme={theme}>
            <Head>
              <meta content="width=device-width, initial-scale=1" name="viewport" />
              <title>Turbo/Next/Chakra/Fauna/Apollo App</title>
            </Head>
            <Global styles={globalStyle} />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ChakraProvider>
        </NextIntlProvider>
      </ApolloProvider>
    </UserProvider>
  )
}

export default wrapper.withRedux(App)
