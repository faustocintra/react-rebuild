const mongoose = require('mongoose');

const schema = mongoose.Schema({
   nome: {
      type: String,
      required: true
   },
   formacao: {
      type: String
   },
   endereco: {
      type: String
   },
   telefone: {
      type: String,
      required: true
   },
   data_nascimento: {
      type: Date,
      required: true
   },
   cpf: {
      type: String,
      required: true,
      // Não pode repetir CPF no cadastro
      index: {unique : true}
   },
   rg: {
      type: String,
      required: true,
   },
   valor_hora_aula: {
      type: Number,
      required: true,
      default: 20,
      min: 15,
      max: 50
   },
   email: {
      type: String,
      required: true,
      // Não pode repetir e-mail no cadastro
      index: {unique : true}
   }   
});

// Parâmetros de mongoose.model():
// 1º -> nome do model
// 2º -> estrutura de atributos do model (schema)
// 3º -> nome da collection do MongoDB onde
//       os objetos desse model serão armazenados
//       (geralmente, o nome do model em
//       minúsculas e no plural)
module.exports = mongoose.model('Professor', schema, 'professores');