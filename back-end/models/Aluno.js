const mongoose = require('mongoose');
// mongoose precisa ser passado como parâmetro para mongooseSeq
const mongooseSeq = require('mongoose-sequence')(mongoose);

const schema = mongoose.Schema({
   nome: {
      type: String,
      required: true
   },
   endereco: {
      type: String
   },
   data_nascimento: {
      type: Date,
      required: true
   },
   telefone: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
      // Não pode repetir e-mail no cadastro
      index: {unique : true}
   },
   num_matricula: {
      type: Number,
      index: {unique : true}
   },  
   cpf: {
      type: String,
      required: true,
      // Não pode repetir CPF no cadastro
      index: {unique : true}
   },
   rg: {
      type: String
   },
   turma: {
      type: mongoose.ObjectId,
      ref: 'Turma'
   }
});

schema.plugin(mongooseSeq, {inc_field: 'num_matricula'});

// Parâmetros de mongoose.model():
// 1º -> nome do model
// 2º -> estrutura de atributos do model (schema)
// 3º -> nome da collection do MongoDB onde
//       os objetos desse model serão armazenados
//       (geralmente, o nome do model em
//       minúsculas e no plural)
module.exports = mongoose.model('Aluno', schema, 'alunos');