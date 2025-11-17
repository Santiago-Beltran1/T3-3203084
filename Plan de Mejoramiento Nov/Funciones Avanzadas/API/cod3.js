// Validando errores basados en status HTTP
async function SantiagoObtenerConValidacion() {
  try {
    let SantiagoRespuesta = await fetch("https://jsonplaceholder.typicode.com/usuariosInexistentes");

    if (!SantiagoRespuesta.ok) {
      throw new Error("Error HTTP: " + SantiagoRespuesta.status);
    }

    let SantiagoDatos = await SantiagoRespuesta.json();
    console.log(SantiagoDatos);
  } catch (SantiagoError) {
    console.log("Error detectado:", SantiagoError.message);
  }
}

SantiagoObtenerConValidacion();
