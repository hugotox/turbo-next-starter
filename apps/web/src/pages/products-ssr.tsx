import { gql, useQuery } from '@apollo/client'
import { getServerSidePropsWrapper, getSession } from '@auth0/nextjs-auth0'
import { Heading } from '@chakra-ui/react'
import { addApolloState, initializeApollo } from 'apollo-client'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

import { validateSession } from '../utils'

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

export const getServerSideProps: GetServerSideProps = getServerSidePropsWrapper(
  async ({ req, res }) => {
    const session = getSession(req, res)
    if (validateSession(session)) {
      // User is authenticated
      if (session?.accessToken) {
        const apolloClient = initializeApollo({ accessToken: session.accessToken })
        try {
          await apolloClient.query({
            query,
          })
        } catch {}
        return addApolloState(apolloClient, {
          props: {},
        })
      }
    }
    return {
      props: {},
    }
  }
)
