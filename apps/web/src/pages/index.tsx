import { Heading, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { MyForm } from 'ui'

import { useAppSelector } from '../lib/store'

export default function Web() {
  const appVersion = useAppSelector((state) => state.app.version)
  return (
    <div>
      <Heading as="h1" css={{}} size="4xl">
        Turbo Next Starter
      </Heading>
      <ul>
        <li>
          <NextLink href="/products" passHref>
            <Link>Products (client side)</Link>
          </NextLink>
        </li>
        <li>
          <NextLink href="/products-ssr" passHref>
            <Link>Products (server side)</Link>
          </NextLink>
        </li>
      </ul>
      <br />
      <NextLink href="/login" passHref>
        <Link>Login page</Link>
      </NextLink>
      <br />
      <MyForm version={appVersion} />
    </div>
  )
}
