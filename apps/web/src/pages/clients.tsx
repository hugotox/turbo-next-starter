import { gql, useQuery } from '@apollo/client'
import { Heading } from '@chakra-ui/react'
import { addApolloState, initializeApollo } from 'apollo-client'

const query = gql`
  {
    clients {
      data {
        firstName
        lastName
        email
      }
    }
  }
`

export default function Clients() {
  const { data } = useQuery(query)

  return (
    <div>
      <Heading as="h1" size="lg">
        Clients
      </Heading>
      {data?.clients?.data?.map?.(({ email, firstName, lastName }: any) => {
        return (
          <div key={email}>
            First Name: {firstName} <br />
            Last Name: {lastName} <br />
            Email: {email} <br />
          </div>
        )
      })}
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
