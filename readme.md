# Nodepop API

**Nodepop** es un API donde se muestran anuncios al estilo de wallapop.<br>
En la página principal se muestra un listado con los anuncios.
## Documentación:
En la carpeta **lib** están:
*   anuncios.json: un json donde se muestran los anuncios para subir a la base de datos
*   connectMongoose.js: conectar a la base de datos
*   install_db.js: script de inicializacion de la base de datos donde se carga el json y se borra lo que había previamente en la base de datos
## Comandos:
*   Para arrancar mongoDB : `./bin/mongod --dbpath ./data/db --directoryperdb`
*   Para iniciar el API entorno de desarrollo: `npm run dev`
*   Para iniciar la base de datos: `npm run installDB`
## Documentación:
## Filtros:
Se puede filtrar por **nombre**, **rango de precio**, **tags**. También están implementadas las funciones de ordenar, skip y limit.<br>
Por ejemplo:<br>
-http://localhost:3000/apiv1/anuncios?precio=50-500<br>
Esta query mostrará los productos que tienen un precio entre 50 y 500 euros.



