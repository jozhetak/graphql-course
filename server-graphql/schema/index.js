const { gql } = require('apollo-server')
const resolvers = require('../resolvers')
const Profesor = require('./Profesor')
const Curso = require('./Curso')

const rootQuery = gql`
  type Query {
    cursos: [Curso]
    profesores: [Profesor]
    curso(id: Int): Curso
    profesor(id: Int): Profesor
  }
`

const typeDefs = [rootQuery, Profesor, Curso]

module.exports = { typeDefs, resolvers }