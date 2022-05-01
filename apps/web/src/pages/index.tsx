import { gql, useQuery } from '@apollo/client'
import { Button } from 'ui'

import { addApolloState, initializeApollo } from '../lib/apollo-client'

const query = gql`
  {
    hello
  }
`

export default function Web() {
  const { data } = useQuery(query)

  return (
    <div>
      <h1>API data: {JSON.stringify(data)}</h1>
      <Button />
    </div>
  )
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({ query })
  return addApolloState(apolloClient, {
    props: {},
  })
}
