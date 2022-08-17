import { gql, useQuery } from '@apollo/client'
import { Heading } from '@chakra-ui/react'
import Link from 'next/link'

import { useAppSelector } from '../redux-store'
import { selectApolloReady } from '../redux-store/appSlice'

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
  const apolloReady = useAppSelector(selectApolloReady)
  const { data } = useQuery(query, { skip: !apolloReady })

  return (
    <div>
      <Heading as="h1" size="2xl">
        <Link href="/">Turbo Next Starter</Link>
      </Heading>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
