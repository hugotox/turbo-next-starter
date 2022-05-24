/* eslint-disable @next/next/no-img-element */
import { gql, useQuery } from '@apollo/client'
import { getServerSidePropsWrapper, getSession, getAccessToken } from '@auth0/nextjs-auth0'
import { addApolloState, initializeApollo } from 'apollo-client'
import { GetServerSideProps } from 'next'

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

export default function Login({ user }: any) {
  // const { error, isLoading, user } = useUser()
  const { data, error } = useQuery(query)
  if (user) {
    return (
      <>
        Signed in as {user.email} <br />
        {user?.picture && (
          <img
            alt=""
            height={80}
            src={String(user.picture)}
            style={{ borderRadius: '50%', overflow: 'hidden' }}
            width={80}
          />
        )}
        <a href="/api/auth/logout">Logout</a>
        <br />
        Session data:
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <br />
        {error && (
          <div>
            Fauna error: <br />
            <pre>{JSON.stringify(error, null, 2)}</pre>
          </div>
        )}
        {data && (
          <div>
            Fauna data: <br />
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <a href="/api/auth/login">Login</a>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = getServerSidePropsWrapper(
  async ({ req, res }) => {
    const session = getSession(req, res)
    if (session) {
      // User is authenticated
      const { accessToken } = await getAccessToken(req, res)
      if (accessToken) {
        const apolloClient = initializeApollo({ accessToken })
        try {
          await apolloClient.query({
            query,
          })
        } catch {}
        return addApolloState(apolloClient, {
          props: {
            accessToken,
            user: session?.user ?? null,
          },
        })
      }
    }
    return {
      props: {},
    }
  }
)
