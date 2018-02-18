'use strict';

const express = require('express');

const router = express.Router();

const Anuncio = require('../../models/Anuncio');

//get
//Lista de anuncios
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
      //filtro.precio = precio;
      const rangoPrecio = precio.split('-');
      const precioMin = rangoPrecio[0];
      const precioMax = rangoPrecio[1];
      if (rangoPrecio.length === 1) {
        filtro.precio = precio;
      } else {
        if (precioMax) {//precios menores o igual que
          filtro.precio = { '$lte': precioMax };
        }
        if (precioMin) {//precios mayores que o igual que
          filtro.precio = { '$gte': precioMin };
        }
        if (precioMin && precioMax) {//precios mayores o menores o igual que
          filtro.precio = { '$gte': precioMin, '$lte': precioMax };
        }
      }//else

      //filtro.precio = { $gte: precio };//para mayor o igual a ese precio
    }
    if (typeof tags !== 'undefined') { //si me piden filtrar por nombre lo añado al filtro
      filtro.tags = tags;
    }
    const docs = await Anuncio.listar(filtro, skip, limit, sort, fields);
    res.json({ success: true, result: docs });
  }
  catch (err) {
    next(err);
    return;
  }

});

router.post('/', (req, res, next) => {
  console.log(req.body);
  // creamos documento de anuncio en memoria
  const data = req.body;// esto son los datos que recibo
  const anuncio = new Anuncio(data);

  //lo persitimos en la base de datos
  anuncio.save((err, anuncioGuardado) => {//.save es método de instancia
    if (err) {
      next(err);
      return;
    }
    res.json({ success: true, result: anuncioGuardado });
  });


});
//delete
//elimina un anuncio
router.delete('/:id', async (req, res, next) => {
  try {
    const _id = req.params.id;
    await Anuncio.remove({ _id: _id }).exec(); //.remove es metodo estático
    res.json({ success: true });
  }
  catch (err) {
    return next(err);
  }
});

//put
//actualiza un anuncio
router.put('/:id', async (req, res, next) => {
  try {
    const _id = req.params.id;
    const data = req.body;
    const anuncioActualizado = await Anuncio.findByIdAndUpdate(_id, data, { new: true });
    res.json({ success: true, result: anuncioActualizado });
  }
  catch (err) {
    next(err);
    return;
  }
});

module.exports = router;