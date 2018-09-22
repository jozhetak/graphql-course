const { gql } = require('apollo-server')
const Curso = require('./models/Curso')

const typeDefs = gql`
  # Esto es un curso del sistema
  type Curso {
    id: ID!
    titulo: String!
    # Esta es la descripcion del curso
    descripcion: String!
    profesor: Profesor
    rating: Float @deprecated(reason: "No creemos mas en los puntajes")
    comentarios: [Comentario]
  }

  type Profesor {
    id: ID!
    nombre: String!
    nacionalidad: String!
    genero: Genero
    cursos: [Curso]
  }

  enum Genero {
    FEMENINO
    MASCULINO
  }

  type Comentario {
    id: ID!
    nombre: String!
    cuerpo: String!
  }

  type Query {
    cursos: [Curso]
    profesores: [Profesor]
    curso(id: Int): Curso
    profesor(id: Int): Profesor
  }
`

const resolvers = {
  Query: {
    cursos: () => Curso.query(),
  },
  Curso: {
    profesor: () => {
      return {
        nombre: 'Pablo',
        nacionalidad: 'Venezuela'
      }
    },
    comentarios: () => {
      return [{
        id: 1,
        nombre: 'Simon',
        cuerpo: 'Desarrollador'
      }]
    }
  }
}

module.exports = { typeDefs, resolvers }