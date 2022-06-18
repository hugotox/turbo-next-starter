import { Heading, Link, useColorMode, Code, UnorderedList, ListItem } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import { useTranslations } from 'next-intl'
import NextLink from 'next/link'
import { Button } from 'ui'

import { useAppSelector } from '../redux-store'
import { getLangFiles } from '../utils/pages'

export default function Web() {
  const appVersion = useAppSelector((state) => state.app.version)
  const { colorMode, toggleColorMode } = useColorMode()
  const t = useTranslations('Home')
  return (
    <>
      <Heading as="h1" size="2xl">
        {t('heading')}
      </Heading>
      <br />
      <UnorderedList>
        <ListItem>
          <NextLink href="/products" passHref>
            <Link>Products (client side)</Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="/products-ssr" passHref>
            <Link>Products (server side)</Link>
          </NextLink>
        </ListItem>
      </UnorderedList>
      <br />
      <NextLink href="/login" passHref>
        <Link>Login page</Link>
      </NextLink>
      <br />
      <Code>App version: {appVersion}</Code>
      <br />
      <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: await getLangFiles(locale),
    },
  }
}
