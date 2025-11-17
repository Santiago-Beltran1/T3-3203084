// Petición GET usando async/await
async function SantiagoObtenerUsuario(SantiagoID) {
  try {
    let SantiagoRespuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${SantiagoID}`);
    let SantiagoDatos = await SantiagoRespuesta.json();

    console.log("Usuario obtenido:", SantiagoDatos);
  } catch (SantiagoError) {
    console.log("Error al obtener usuario:", SantiagoError);
  }
}

SantiagoObtenerUsuario(3);
