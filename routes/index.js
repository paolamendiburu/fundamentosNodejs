var express = require('express');
var router = express.Router();

//cargamos liberia de validaciones

const Anuncio = require('../models/Anuncio')

/* HTML GET home page con listado de los anuncios  */
router.get('/', async (req, res, next) => {
  try {
    //recogemos parametros de entrada
    const nombre = req.query.nombre;
    const venta = req.query.venta;
    const tags = req.query.tags;
    const precio = req.query.precio;
    const skip = parseInt(req.query.skip);//para que puedan hacer paginacion
    const limit = parseInt(req.query.limit);
    const sort = req.query.sort;
    const fields = req.query.fields;
    const filtro = {};
    if (typeof nombre !== 'undefined') { //filtrar por nombre
      filtro.nombre = new RegExp('^' + req.query.nombre, "i");;
    }
    if (typeof venta !== 'undefined') { // filtrar por venta
      filtro.venta = venta;
    }
    if (typeof precio !== 'undefined') { //filtrar por precio
      filtro.precio = precio;
      //filtro.precio = {$gte:age};//para mayor igual a esa edad
    }
    if (typeof tags !== 'undefined') { //si me piden filtrar por nombre lo añado al filtro
      filtro.tags = tags;
    }

    const docs = await Anuncio.listar(filtro, skip, limit, sort, fields);
    res.locals.anuncios = docs;
    res.render('index', { title: 'Nodepop' });
  }
  catch (err) {
    next(err);
    return;
  }

});



module.exports = router;
