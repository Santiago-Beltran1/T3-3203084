// Enviar datos al servidor con método POST
async function SantiagoCrearUsuario() {
  try {
    let SantiagoRespuesta = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        SantiagoNombre: "Santiago Pérez",
        SantiagoEdad: 25
      })
    });

    let SantiagoResultado = await SantiagoRespuesta.json();
    console.log("Usuario creado:", SantiagoResultado);
  } catch (SantiagoError) {
    console.log("Error al crear usuario:", SantiagoError);
  }
}

SantiagoCrearUsuario();
