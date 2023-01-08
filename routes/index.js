'use strict';

var express = require('express');
var router = express.Router();
const Anuncio = require("../models/Anuncio");


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'holaExpress' });
});

// Devuelve una lista de agentes
router.get("/api/anuncios", async (req, res, next) => {
  try {
    // filtros
    const nombre = req.query.nombre;
    const precio= req.query.precio;
    const venta= req.query.venta;
    const tags= req.query.tags
  
    // paginación
    const skip = req.query.skip;
    const limit = req.query.limit;
    // selección de campos
    const fields = req.query.fields; 
    // ordenación
    const sort = req.query.sort; 

    const filtro = {};

     if (nombre) {
      filtro.nombre = nombre;
    }
    if (precio) {
      filtro.precio = precio;
    }
    if (tags) { 
      filtro.tags = tags;
    }

    if (venta) { 
      filtro.venta = venta;
    }


    const anuncios = await Anuncio.lista(filtro, skip, limit, fields, sort);
    res.json({ results: anuncios });
  } catch(err) {
    next(err);
  }
});

router.get("/api/tags", function(req,res){
   Anuncio.tagsArray(function(err,tags){
  if(err){ 
    return res.json({err});}
    res.json({tags});
});

});

module.exports = router;
