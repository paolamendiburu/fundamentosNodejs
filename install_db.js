--

  /*
   * Script que se encarga de poblar la base de datos
   *
   */

  print("STARTING SCRIPT");
//Host donde está nuestra base de datos, no tiene que ser nuestro equipo local, puede ser cualquier mongoDb.
conn = new Mongo("localhost");
//Nombre de la base de datos que vamos a utilizar
db = conn.getDB("ejemplo");

/*Limpiamos la base de datos por si existia algo antes*/
db.dropDatabase();


/*coleciones de nuestro modelo de datos*/
db.createCollection("anuncios");

/* Usuarios */
print("***********creating users*********");


anuncio1 = {

  "_id": "0",
  "name": "Antuan",
  "surname": "Martín",
  "age": 35,
  "deleted": false

}

anuncio2 = {

  "_id": "1",
  "name": "Felime",
  "surname": "Rodriguez",
  "age": 31,
  "deleted": false

}


anuncio3 = {

  "_id": "2",
  "name": "Jose",
  "surname": "Carrizo",
  "age": 28,
  "deleted": false

}




print("***********saving users*********");
db.users.save(user1);
db.users.save(user2);
db.users.save(user3);




print("SCRIPT FINISHED");

