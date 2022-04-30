import { gql, useQuery } from '@apollo/client'
import { Button } from 'ui'

const query = gql`
  {
    hello
  }
`

export default function Web() {
  const { data } = useQuery(query)

  return (
    <div>
      <h1>API data: {JSON.stringify(data)}</h1>
      <Button />
    </div>
  )
}
