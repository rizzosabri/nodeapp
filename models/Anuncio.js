"use strict"

const mongoose = require("mongoose");

//definir esquima de anuncio

const anuncioSchema = mongoose.Schema({
   nombre: { type: String, index: true },
   venta: { type: Boolean, index: true },
   precio: { type: Number, index: true },
   foto: String,
   tags: { type: Array, index: true }
});

anuncioSchema.statics.lista = function (filtro, skip, limit, fields, sort) {
   const query = Anuncio.find(filtro); // esto no ejecuta la consulta, devuelve la query sin ejecutar
   query.skip(skip);
   query.limit(limit);
   query.select(fields);
   query.sort(sort);
   return query.exec() // aquí se ejecuta la consulta y retornamos la promesa
}

anuncioSchema.statics.tagsArray = function (cb) {
   return new Promise(function (resolve, reject) {
      const query = Anuncio.find().distinct("tags", function (err, results) {
         if (err) {
            if (cb) {
               cb(err);
               return;
            }
            reject(err);
         }
         if (cb) {
            cb(null, results);
            return;
         }
         resolve(results);
      });

   });

};
// crear el modelo
const Anuncio = mongoose.model("anuncio", anuncioSchema)

//exportar el modelo

module.exports = Anuncio;
