import { gql, useQuery } from '@apollo/client'
import { Heading } from '@chakra-ui/react'
import { addApolloState, initializeApollo } from 'apollo-client'
import { Button } from 'ui'

const query = gql`
  query Entries($size: Int) {
    entries(_size: $size) {
      data {
        _id
        _ts
        name
        message
        createdAt
      }
    }
  }
`

export default function Web() {
  const { data } = useQuery(query)
  return (
    <div>
      <Heading as="h1" size="4xl">
        Turbo Next Starter
      </Heading>
      <Button />
      <pre>{JSON.stringify(data.entries?.data ?? [], null, 2)}</pre>
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
