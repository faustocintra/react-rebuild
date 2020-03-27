const mongoose = require('mongoose');

const schema = mongoose.Schema({
   nome: {
      type: String, required: true
   },
   dia_semana: {
      type: String, required: true,
      // O atributo somente pode receber um dos valores da enum
      enum: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb']
   },
   horario_inicial: {
      type: String, required: true
   },
   horario_final: {
      type: String, required: true
   },
   data_inicial: {
      type: Date, required: true
   },
   data_final : {
      type: Date, required: true
   },
   professor: {
      // ref: nome do model (por isso inicial maiúscula) referenciado pelo atributo
      type: mongoose.ObjectId, ref: 'Professor', required: true
   },
   curso: {
      // ref: nome do model (por isso inicial maiúscula) referenciado pelo atributo
      type: mongoose.ObjectId, ref: 'Curso', required: true
   }
});

// Parâmetros de mongoose.model():
// 1º -> nome do model
// 2º -> estrutura de atributos do model (schema)
// 3º -> nome da collection do MongoDB onde
//       os objetos desse model serão armazenados
//       (geralmente, o nome do model em
//       minúsculas e no plural)
module.exports = mongoose.model('Turma', schema, 'turmas');