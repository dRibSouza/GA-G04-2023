const mongoose = require('mongoose')

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true  // Campo obigatório
  },
  phone: {
    type: String,
    required: false
  },
  cpf: {
    type: String,
    required: true
  },
  cro: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  specialty: {
    type: String,
    required: true
  },
  // Subdocumento incorporado
  schedule: {
    day_of_the_week: {
      type: String,
      required: false
    },
    initial_time: {
        type: String,
        required: false
    },
    final_time: {
        type: String,
        required: false
    },
    
  }
})

/*
  Parâmetros de mongoose.model:
  1º: nome da model, para uso interno (convenção: primeira letra maiúscula e singular)
  2º: relação de campos do esquema (constante schema)
  3º: nome da collection no banco de dados (convenção: mesmo nome do model, mas com
      letra minúscula e no plural)
*/
module.exports = mongoose.model('Dentist', schema, 'dentists')