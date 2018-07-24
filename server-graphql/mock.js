const casual = require('casual')

const mocks = {
  Curso: () => {
    return {
      id: 1,
      titulo: 'Curso de GraphQL',
      descripcion: 'Aprendiendo GraphQL'
    }
  },
  Profesor: () => {
    return { 
      id: 1,
      nombre: 'Sasha Susana',
      nacionalidad: 'Venezuela'
    }
  }
}

module.exports = mocks