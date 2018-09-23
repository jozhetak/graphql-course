module.exports = `
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

  type Comentario {
    id: ID!
    nombre: String!
    cuerpo: String!
  }
`
