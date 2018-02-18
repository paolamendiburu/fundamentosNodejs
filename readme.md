# Nodepop API

**Nodepop** es un API donde se muestran anuncios al estilo de wallapop.<br>
En la página principal se muestra un listado con los anuncios.

## Comandos:
*   Para arrancar mongoDB : `./bin/mongod --dbpath ./data/db --directoryperdb`
*   Para iniciar el API entorno de desarrollo: `npm run dev`
*   Para iniciar la base de datos:`npm run installDB`

## Filtros:
Se puede filtrar por nombre, rango de precio, tags. También estan implementadas las funciones de ordenar, skip y limit
Por ejemplo:<br>
-http://localhost:3000/apiv1/anuncios?precio=50-500<br>
Esta query mostrará los productos que tienen un precio entre 50 y 500 euros



