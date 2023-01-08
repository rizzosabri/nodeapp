require("./lib/connectMongoose");
const readline = require('readline');
const anunciosJson = require("./anuncios.json")
const Anuncio = require("./models/Anuncio");


async function main() {
  
  const continuar = await preguntaSiNo("****DESEA REINICIAR LA BASE DE DATOS???**** esriba SI, de lo contrario ENTER")
  if (!continuar) {
    process.exit();
  }

    // conectar a la base de datos
    const connection = require('./lib/connectMongoose')
    // inicializar la colección de agentes
    await initAnuncios();
    // desconectamos de la base de datos
    connection.close();
  }
  
  main().catch(err => console.log('Hubo un error', err));
  
  async function initAnuncios() {
    // borrar todos los documentos de la colección anuncios
    const result = await Anuncio.deleteMany();
    console.log(`Eliminados ${result.deletedCount} anuncios.`);  
    // crear los definidos en anuncios.json
    const inserted = await Anuncio.insertMany(anunciosJson.anuncios);
    console.log(`Añadidos ${inserted.length} anuncios.`);  
}

function preguntaSiNo(texto) {
  return new Promise((resolve, reject) => {
    const interface = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    interface.question(texto, respuesta => {
      interface.close();
      if (respuesta.toLowerCase() === 'si') {
        resolve(true);
        return;
      }
      resolve(false);
    })
  })
}