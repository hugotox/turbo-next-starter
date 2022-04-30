import { gql } from 'apollo-server'

const queryTypeDefs = gql`
  type Query {
    _empty: String
  }
`

export const typeDefs = [queryTypeDefs]
