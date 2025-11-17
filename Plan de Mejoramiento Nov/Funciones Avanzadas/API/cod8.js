// Ejecutar varias peticiones al mismo tiempo
async function SantiagoConsumirMultiples() {
  try {
    let [SantiagoUsuario, SantiagoPosts] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json()),
      fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then(res => res.json())
    ]);

    console.log("Usuario:", SantiagoUsuario);
    console.log("Posts:", SantiagoPosts);
  } catch (SantiagoError) {
    console.log("Error en Fetch múltiple:", SantiagoError);
  }
}

SantiagoConsumirMultiples();
