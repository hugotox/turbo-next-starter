import { Heading } from '@chakra-ui/react'
import { listGuestbookEntries } from '@hugotox/fauna-client'
import { Button } from '@hugotox/ui'

export default function Web({ initialEntries }: any) {
  return (
    <div>
      <Heading as="h1" size="4xl">
        Turbo Next Starter
      </Heading>
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
