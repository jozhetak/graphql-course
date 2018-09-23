module.exports = `
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

  input NuevoProfesor {
    nombre: String!,
    genero: Genero,
    nacionalidad: String!
  }

  input ProfesorEditable {
    nombre: String,
    genero: Genero,
    nacionalidad: String
  }
`
