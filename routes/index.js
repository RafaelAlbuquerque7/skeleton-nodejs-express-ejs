var express = require('express');
var router = express.Router();
const Autor = require("../models/autor");
/* GET home page. */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores.rows)
  //res.render('index', { title: 'Express' });
});

router.post('/inserir', async function(req, res, next){
  const autores = await Autor.inserir(req.body);
  res.json(autores)


});

router.get('/deletar', async function(req, res, next) {
  const deleta = {
    id: "2" 
  }
     const autores = await Autor.deletar(deleta);
  res.json(autores)
});

router.put('/atualizar', async function(req, res, next) {
  const autores = await Autor.atualizar(req.body);
  res.json(autores)

  
});

module.exports = router;
