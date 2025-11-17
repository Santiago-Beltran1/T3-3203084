// Actualizar un recurso con PUT
async function SantiagoActualizarUsuario() {
  try {
    let SantiagoRespuesta = await fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        SantiagoNombre: "Santiago Actualizado",
        SantiagoCiudad: "Bogotá"
      })
    });

    let SantiagoDatos = await SantiagoRespuesta.json();
    console.log("Usuario actualizado:", SantiagoDatos);
  } catch (SantiagoError) {
    console.log("Error al actualizar:", SantiagoError);
  }
}

SantiagoActualizarUsuario();
