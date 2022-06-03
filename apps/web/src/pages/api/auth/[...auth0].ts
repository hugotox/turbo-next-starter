import { handleAuth, handleCallback } from '@auth0/nextjs-auth0'
import jwtDecode from 'jwt-decode'

const namespace = process.env.AUTH0_CLAIM_NAMESPACE

export default handleAuth({
  async callback(req, res) {
    await handleCallback(req, res, {
      async afterCallback(req, res, session) {
        const { idToken } = session
        const decoded = jwtDecode<Record<string, string>>(idToken ?? '') ?? {}
        const faunaAccessToken = decoded?.[`${namespace}/faunaAccessToken`] ?? ''
        return {
          ...session,
          accessToken: faunaAccessToken,
        }
      },
    })
  },
})
