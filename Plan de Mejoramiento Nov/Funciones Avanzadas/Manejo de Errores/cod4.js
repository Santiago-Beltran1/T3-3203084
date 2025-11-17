// Capturar error de promesa dentro de async/await
async function SantiagoCapturaError() {
  try {
    await SantiagoOperacionAsincrona(false); // fuerza un error
  } catch (SantiagoError) {
    console.log("Error capturado en async:", SantiagoError);
  }
}

SantiagoCapturaError();
