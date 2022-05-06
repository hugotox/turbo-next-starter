import { listGuestbookEntries } from '@hugotox/fauna-client'

export default async function handler(req, res) {
  const handlers = {
    GET: async () => {
      const entries = await listGuestbookEntries()

      res.json(entries)
    },
  }

  if (!handlers[req.method]) {
    return res.status(405).end()
  }

  await handlers[req.method]()
}
