const Professor = require('../models/Professor');

const controller = {}; // Objeto vazio

controller.novo = async function(req, res) {
   try {
      await Professor.create(req.body);
      // HTTP 201: Created
      //res.sendStatus(201).end();
      res.status(201).send(''); // Para o Angular
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
      const professores = await Professor.find().sort('nome');
      res.send(professores);
   }
   catch(erro) {
      console.error(erro);
      res.sendStatus(500).end();
   }
}

controller.obterUm = async function(req, res) {
   const id = req.params.id;
   try {
      const professor = await Professor.findById(id);
      if(professor) {    // Professor encontrado (variável preenchida)
         res.send(professor);
      }
      else {      // Professor não encontrado (variável vazia)
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
      const professor = await Professor.findByIdAndUpdate(id, req.body);
      if(professor) {
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
      const professor = await Professor.findByIdAndDelete(id);
      if(professor) {
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