const { ApolloServer } = require('apollo-server')
const { typeDefs, resolvers } = require('./schema')
require('./db/setup')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: error => {
    return {
      mensaje: error.message
    }
  },
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server running at ${url}`);
})
