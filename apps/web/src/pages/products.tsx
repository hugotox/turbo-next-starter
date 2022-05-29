import { gql, useQuery } from '@apollo/client'
import { Heading } from '@chakra-ui/react'
import Link from 'next/link'

const query = gql`
  query Products {
    allProducts {
      data {
        name
        quantity
        backorderLimit
        description
        price
        backordered
      }
    }
  }
`

export default function Products() {
  const { data } = useQuery(query)

  return (
    <div>
      <Heading as="h1" size="4xl">
        <Link href="/">Turbo Next Starter</Link>
      </Heading>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
