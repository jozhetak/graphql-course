const { ApolloServer } = require('apollo-server')
const { typeDefs, resolvers } = require('./schema')

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server running at ${url}`);
})
