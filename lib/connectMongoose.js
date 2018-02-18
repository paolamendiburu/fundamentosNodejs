'use strict';
const mongoose = require('mongoose');
const conn = mongoose.connection;


conn.on('error', err => {
  console.log('Error de conexion', err);
  process.exit();
});
conn.once('open', () => {
  console.log('Conectado a Mongodb en, ', mongoose.connection.name);
});

mongoose.connect('mongodb://localhost/nodepop');
