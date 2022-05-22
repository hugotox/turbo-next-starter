import { gql } from '@apollo/client'
import { addApolloState, initializeApollo } from 'apollo-client'
import type { NextApiRequest, NextApiResponse } from 'next'

const query = gql`
  query Products {
    allProducts {
      data {
        name
        quantity
        backorderLimit
        description
        price
        backordered
      }
    }
  }
`

export default async function Products(req: NextApiRequest, res: NextApiResponse) {
  const apolloClient = initializeApollo()
  const response = await apolloClient.query({
    query,
  })
  res.status(200).json(response)
}
