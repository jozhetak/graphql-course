const { ApolloServer } = require('apollo-server')
const { typeDefs, resolvers } = require('./schema')
const mocks = require('./mock')

const server = new ApolloServer({
  typeDefs,
  mocks
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server running at ${url}`);
})
