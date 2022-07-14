import { getSession } from '@auth0/nextjs-auth0'
import type { NextApiRequest, NextApiResponse } from 'next'

import { validateSession } from '../../../utils/pageUtils'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSession(req, res)

  if (validateSession(session)) {
    res.status(200).json({ accessToken: session?.accessToken })
  } else {
    res.status(400).json({ message: 'Session expired.' })
  }
}
