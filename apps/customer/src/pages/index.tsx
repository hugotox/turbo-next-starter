import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import { useTranslations } from 'next-intl'
import { ColorModeToggle, Link } from 'ui'

import { getLangMessages } from '../lib/pageUtils'

export default function Web() {
  const t = useTranslations('web.Home')
  return (
    <>
      <Heading as="h1" size="2xl">
        {t('heading')}
      </Heading>
      <Box marginTop={4}>
        <ColorModeToggle />
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
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      ...(await getLangMessages({ locale, page: 'index' })),
    },
  }
}
