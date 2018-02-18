// librería fs
const fs = require('fs');

// conexion a la base de datos
require('./connectMongoose');

const Anuncio = require('../models/Anuncio');
const json = JSON.parse(
  fs.readFileSync(__dirname + '/anuncios.json', "utf-8")
);

// funcion para cargar los anuncios
cargarAnuncios(json.anuncios).catch(err => console.log(err));

async function cargarAnuncios(anuncios) {
  try {

    //eliminamos lo que hay previamente en la base de datos
    await Anuncio.remove();
    console.log('Anuncios borrados.')
    //insertamos los anuncios
    await Anuncio.insertMany(anuncios);
    console.log('Anuncios cargados.')

    console.log("Done!");
    process.exit();
  } catch (e) {
    console.log(e);
    process.exit();
  }
}