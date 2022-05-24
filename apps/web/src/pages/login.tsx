/* eslint-disable @next/next/no-img-element */
import { useUser } from '@auth0/nextjs-auth0'
import { NextPageContext } from 'next'

export default function Login() {
  const { error, isLoading, user } = useUser()
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

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {
      // session: await getSession(context),
    },
  }
}
