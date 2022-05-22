/* eslint-disable @next/next/no-img-element */
import { NextPageContext } from 'next'
import { useSession, signIn, signOut, getSession } from 'next-auth/react'

export default function Login() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        {session?.user?.image && (
          <img
            alt=""
            height={80}
            src={session.user.image}
            style={{ borderRadius: '50%', overflow: 'hidden' }}
            width={80}
          />
        )}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {
      session: await getSession(context),
    },
  }
}
