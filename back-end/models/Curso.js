const mongoose = require('mongoose');

const schema = mongoose.Schema({
   nome: {
      type: String,
      required: true
   },
   duracao_meses: {
      type: Number,
      required: true,
      default: 6 // Maioria dos cursos dura 6 meses
   },
   carga_horaria: {
      type: Number,
      required: true,
      default: 100 // Maioria dos cursos: 100 horas
   },
   valor_total: {
      type: Number,
      required: true
   }
});

// Parâmetros de mongoose.model():
// 1º -> nome do model
// 2º -> estrutura de atributos do model (schema)
// 3º -> nome da collection do MongoDB onde
//       os objetos desse model serão armazenados
//       (geralmente, o nome do model em
//       minúsculas e no plural)
module.exports = mongoose.model('Curso', schema, 'cursos');