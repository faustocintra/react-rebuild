const Turma = require('../models/Turma');

const controller = {}; // Objeto vazio

controller.novo = async function(req, res) {
   try {
      await Turma.create(req.body);
      // HTTP 201: Created
      //res.sendStatus(201).end();
      res.status(201).send('');
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
      const turmas = await 
         Turma.find()
         .populate('professor') // Nome do *atributo* (minúsculo)
         .populate('curso') // Nome do *atributo* (minúsculo)
      ;
      res.send(turmas);
   }
   catch(erro) {
      console.error(erro);
      res.sendStatus(500).end();
   }
}

controller.obterUm = async function(req, res) {
   const id = req.params.id;
   try {
      const turma = await Turma.findById(id);
      if(turma) {    // Turma encontrada (variável preenchida)
         res.send(turma);
      }
      else {      // Turma não encontrada (variável vazia)
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
      const turma = await Turma.findByIdAndUpdate(id, req.body);
      if(turma) {
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
      const turma = await Turma.findByIdAndDelete(id);
      if(turma) {
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