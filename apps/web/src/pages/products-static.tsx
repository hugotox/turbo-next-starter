import { gql, useQuery } from '@apollo/client'
import { Heading } from '@chakra-ui/react'
import { addApolloState, initializeApollo } from 'apollo-client'
import { Button } from 'ui'

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
      <Heading as="h1" css={{}} size="4xl">
        Turbo Next Starter
      </Heading>
      <Button />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo()
  await apolloClient.query({
    query,
  })
  return addApolloState(apolloClient, {
    props: {},
    revalidate: 10,
  })
}
