/* eslint-disable @next/next/no-img-element */

import { getServerSidePropsWrapper, getSession } from '@auth0/nextjs-auth0'
import { GetServerSideProps } from 'next'

export default function Login({ user }: any) {
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
    return {
      props: {
        user: session?.user ?? null,
      },
    }
  }
)
