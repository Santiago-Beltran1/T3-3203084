// Manejo de promesas usando async/await
async function SantiagoEjecutarAsync() {
  try {
    let SantiagoRespuesta = await SantiagoOperacionAsincrona(true);
    console.log("Respuesta async:", SantiagoRespuesta);
  } catch (SantiagoError) {
    console.log("Error async:", SantiagoError);
  }
}

SantiagoEjecutarAsync();
