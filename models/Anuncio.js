'use strict';
//cargamos mongoose
const mongoose = require('mongoose');

//definimos el esquema
var anuncioSchema = mongoose.Schema({
  nombre: String,
  venta: Boolean,
  precio: Number,
  foto: String,
  tags: [String]
});
//creamos un método estatico (del modelo)
anuncioSchema.statics.listar = function (filtro, skip, limit, sort, fields, callback) {
  //obtenemos la query sin ejecutarla
  const query = Anuncio.find(filtro);
  query.skip(skip);
  query.limit(limit);
  query.sort(sort);
  query.select(fields);
  return query.exec(callback);
};

//creamos el modelo
const Anuncio = mongoose.model('Anuncio', anuncioSchema);
//exportamos el modelo
module.exports = Anuncio;