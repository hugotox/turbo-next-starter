import { Heading, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Web() {
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
        <li>
          <NextLink href="/products-static" passHref>
            <Link>Products (static)</Link>
          </NextLink>
        </li>
      </ul>
      <br />
      <NextLink href="/login" passHref>
        <Link>Login page</Link>
      </NextLink>
    </div>
  )
}
