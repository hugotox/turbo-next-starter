import { listGuestbookEntries } from 'fauna-client'
import { Button } from 'ui'

export default function Web({ initialEntries }: any) {
  return (
    <div>
      <Button />
      <pre>{JSON.stringify(initialEntries, null, 2)}</pre>
    </div>
  )
}

export const getStaticProps = async () => ({
  props: {
    initialEntries: await listGuestbookEntries(),
  },
  revalidate: 1,
})
