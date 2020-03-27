const Aluno = require('../models/Aluno');

const controller = {}; // Objeto vazio

controller.novo = async function(req, res) {
   try {
      await Aluno.create(req.body);
      // HTTP 201: Created
      res.sendStatus(201).end();
   }
   catch(erro) {
      console.error(erro);
      // HTTP 500: Internal server error
      res.sendStatus(500).end();
   }
}

controller.listar = async function(req, res) {
   try {
      // find() sempre retorna um VETOR,
      // mesmo que vazio
      const alunos = await 
         Aluno.find()
         .populate('turma') // Nome do *atributo* (minúsculo)
      ;
      res.send(alunos);
   }
   catch(erro) {
      console.error(erro);
      res.sendStatus(500).end();
   }
}

controller.obterUm = async function(req, res) {
   const id = req.params.id;
   try {
      const aluno = await Aluno.findById(id);
      if(aluno) {    // Aluno encontrado (variável preenchida)
         res.send(aluno);
      }
      else {      // Aluno não encontrado (variável vazia)
         // HTTP 404: Not found
         res.sendStatus(404).end();
      }
   }
   catch(erro) {
      console.error(erro);
      res.sendStatus(500).end();
   }
}

controller.atualizar = async function(req, res) {
   const id = req.body._id;
   try {
      const aluno = await Aluno.findByIdAndUpdate(id, req.body);
      if(aluno) {
         // HTTP 204: No content
         res.sendStatus(204).end();
      }
      else {
         res.sendStatus(404).end();
      }
   }
   catch(erro) {
      console.error(erro);
      res.sendStatus(500).end();
   }
}

controller.excluir = async function(req, res) {
   const id = req.body._id;
   try {
      const aluno = await Aluno.findByIdAndDelete(id);
      if(aluno) {
         res.sendStatus(204).end();
      }
      else {
         res.sendStatus(404).end();
      }
   }
   catch(erro) {
      console.error(erro);
      res.sendStatus(500).end();
   }
}

module.exports = controller;