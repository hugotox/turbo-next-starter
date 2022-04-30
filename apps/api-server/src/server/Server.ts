import { ApolloServer } from '@saeris/apollo-server-vercel'

// Construct a schema, using GraphQL schema language
const typeDefs = `
  type Query {
    hello: String
  } 
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
}

// By default, the GraphQL Playground interface and GraphQL introspection
// is disabled in "production" (i.e. when `process.env.NODE_ENV` is `production`).
//
// If you'd like to have GraphQL Playground and introspection enabled in production,
// the `playground` and `introspection` options must be set explicitly to `true`.
const server = new ApolloServer({
  // introspection: true,
  // playground: true,
  resolvers,
  typeDefs,
})

export const Server = server.createHandler()
