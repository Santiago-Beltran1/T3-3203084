// PATCH para actualizar solo ciertos campos
async function SantiagoPatchUsuario() {
  try {
    let SantiagoRespuesta = await fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        SantiagoCiudad: "Medellín"
      })
    });

    let SantiagoDatos = await SantiagoRespuesta.json();
    console.log("Usuario parcialmente actualizado:", SantiagoDatos);
  } catch (SantiagoError) {
    console.log("Error en PATCH:", SantiagoError);
  }
}

SantiagoPatchUsuario();
