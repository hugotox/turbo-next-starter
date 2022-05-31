import { Heading, Link, useColorMode, Code, UnorderedList, ListItem } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Button } from 'ui'

import { useAppSelector } from '../redux-store'

export default function Web() {
  const appVersion = useAppSelector((state) => state.app.version)
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Heading as="h1" size="2xl">
        Turbo Next Starter
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
