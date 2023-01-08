
#NodePop

Install dependencies:

"""sh
npm install
"""

Load initial data to database:
npm run init-db

"""
Start the application in production with:
npm start

"""
Start the application in development with:
npm run dev

When the application is started is alocated on localhost:3000.

# API Documentacion

LISTA DE ANUNCIOS SIN FILTROS:

GET  /api/anuncios

{"results":[{"_id":"63ba8c90e855cc673b53bfef","nombre":"Auto","venta":false,"precio":5000,"foto":"auto.png","tags":["lifestyle","motor"],"__v":0},}

LISTA DE ANUNCIOS POR CAMPOS (NOMBRE, PRECIO, VENTA, TAGS, FOTO): 

GET  /api/anuncios?fields=nombre%20-_id

{"results":[{"nombre":"Bicicleta"},{"nombre":"iPhone 3GS"},{"nombre":"Moto"},{"nombre":"Auto"},{"nombre":"Tv smart"},{"nombre":"Sillon"},{"nombre":"Escritorio"},{"nombre":"notebook"}]}

LISTA DE ANUNCIOS PAGINACION

GET  /api/anuncios?skip=0&limit=2

{"results":[{"_id":"63bafc6b131862787c86d3b7","nombre":"Bicicleta","venta":true,"precio":230.15,"foto":"bici.jpg","tags":["lifestyle","motor"],"__v":0},{"_id":"63bafc6b131862787c86d3b8","nombre":"iPhone 3GS","venta":false,"precio":50,"foto":"iphone.jpg","tags":["lifestyle","mobile"],"__v":0}]}

LISTA DE ANUNCIOS CON FILTROS

* POR NOMBRE: GET  /api/anuncios?nombre=Auto

{"results":[{"_id":"63bafc6b131862787c86d3ba","nombre":"Auto","venta":false,"precio":5000,"foto":"auto.jpg","tags":["lifestyle","motor"],"__v":0}]}

* POR PRECIO: GET    /api/anuncios?precio=50

{"results":[{"_id":"63bafc6b131862787c86d3b8","nombre":"iPhone 3GS","venta":false,"precio":50,"foto":"iphone.jpg","tags":["lifestyle","mobile"],"__v":0},{"_id":"63bafc6b131862787c86d3bd","nombre":"Escritorio","venta":false,"precio":50,"foto":"escritorio.jpg","tags":["lifestyle","work"],"__v":0}]}

* POR TIPO DE ANUNCIO GET    /api/anuncios?venta=true&fields=nombre%20-_id
(ejemplo de nombres de articulos que estan a la venta)

{"results":[{"nombre":"Bicicleta"},{"nombre":"Moto"},{"nombre":"Tv smart"},{"nombre":"Sillon"},{"nombre":"notebook"}]}

* POR TAGS GET    /api/anuncios?tags=motor
{"results":[{"_id":"63bafc6b131862787c86d3b7","nombre":"Bicicleta","venta":true,"precio":230.15,"foto":"bici.jpg","tags":["lifestyle","motor"],"__v":0},{"_id":"63bafc6b131862787c86d3b9","nombre":"Moto","venta":true,"precio":1000,"foto":"moto.jpg","tags":["lifestyle","motor"],"__v":0},{"_id":"63bafc6b131862787c86d3ba","nombre":"Auto","venta":false,"precio":5000,"foto":"auto.jpg","tags":["lifestyle","motor"],"__v":0}]}

LISTA DE TAGS

LAS IMAGINES

