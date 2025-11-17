// Eliminar un recurso
async function SantiagoEliminarUsuario() {
  try {
    let SantiagoRespuesta = await fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "DELETE"
    });

    console.log("Usuario eliminado. Status:", SantiagoRespuesta.status);
  } catch (SantiagoError) {
    console.log("Error al eliminar:", SantiagoError);
  }
}

SantiagoEliminarUsuario();
