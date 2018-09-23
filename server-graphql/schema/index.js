const { gql } = require('apollo-server')
const resolvers = require('../resolvers')
const Profesor = require('./Profesor')
const Curso = require('./Curso')

const rootQuery = gql`
  union ResultadoBusqueda = Profesor | Curso

  type Query {
    cursos: [Curso]
    profesores: [Profesor]
    curso(id: Int): Curso
    profesor(id: Int): Profesor
    buscar(query: String!): [ResultadoBusqueda]
  }

  type Mutation {
    profesorAdd(profesor: NuevoProfesor): Profesor
    profesorEdit(profesorId: Int!, profesor: ProfesorEditable): Profesor
    profesorDelete(profesorId: Int!): Profesor
  }
`

const typeDefs = [rootQuery, Profesor, Curso]

module.exports = { typeDefs, resolvers }