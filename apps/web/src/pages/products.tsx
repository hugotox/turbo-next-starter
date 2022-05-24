import { gql, useQuery } from '@apollo/client'
import { getAccessToken, getServerSidePropsWrapper, getSession } from '@auth0/nextjs-auth0'
import { Heading } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
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

export const getServerSideProps: GetServerSideProps = getServerSidePropsWrapper(
  async ({ req, res }) => {
    const session = getSession(req, res)
    if (session) {
      // User is authenticated
      const { accessToken } = await getAccessToken(req, res)
      if (accessToken) {
        return {
          props: {
            accessToken,
          },
        }
      }
    }
    return {
      props: {},
    }
  }
)
