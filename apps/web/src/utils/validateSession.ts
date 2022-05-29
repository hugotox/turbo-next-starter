import { Session } from '@auth0/nextjs-auth0'

export const validateSession = (session?: Session | null) => {
  const now = Date.now()
  if (session?.accessToken && session?.accessTokenExpiresAt) {
    const accessTokenExpiresAt = session.accessTokenExpiresAt * 1000
    if (accessTokenExpiresAt > now) {
      return true
    }
  }
  return false
}
