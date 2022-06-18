import { Heading, useColorMode, Code, UnorderedList, ListItem, Button, Box } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import { useTranslations } from 'next-intl'
import { Link } from 'ui'

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
      <Box marginTop={4}>
        <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
      </Box>
      <br />
      <UnorderedList>
        <ListItem>
          <Link href="/login">Login page</Link>
        </ListItem>
        <ListItem>
          <Link href="/products">Products (client side)</Link>
        </ListItem>
        <ListItem>
          <Link href="/products-ssr">Products (server side)</Link>
        </ListItem>
        <ListItem>
          <Link href="/file-upload-example">File upload example</Link>
        </ListItem>
      </UnorderedList>
      <br />
      <br />
      <Code>App version: {appVersion}</Code>
      <br />
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
