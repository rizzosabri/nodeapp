
// function preguntaSiNo(texto) {
//   return new Promise((resolve, reject) => {
//     const interface = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout
//     });
//     interface.question(texto, respuesta => {
//       interface.close();
//       if (respuesta.toLowerCase() === 'si') {
//         resolve(true);
//         return;
//       }
//       resolve(false);
//     })
//   })
// }