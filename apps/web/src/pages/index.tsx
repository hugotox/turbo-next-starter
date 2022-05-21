import { Heading, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Web() {
  return (
    <div>
      <Heading as="h1" css={{}} size="4xl">
        Turbo Next Starter
      </Heading>
      <NextLink href="/products" passHref>
        <Link>Products</Link>
      </NextLink>
    </div>
  )
}
