import { Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Button } from 'ui'

export default function Products() {
  const [data, setData] = useState({})

  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetch('/api/products')
      const data = await response.json()
      setData(data)
    }
    loadProducts()
  }, [])
  return (
    <div>
      <Heading as="h1" css={{}} size="4xl">
        Turbo Next Starter
      </Heading>
      <Button />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
