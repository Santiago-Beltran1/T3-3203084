// Cancelar una petición con AbortController
async function SantiagoPeticionConTimeout() {
  const SantiagoControlador = new AbortController();

  setTimeout(() => SantiagoControlador.abort(), 1000);  // tiempo límite de 1 segundo

  try {
    let SantiagoRespuesta = await fetch("https://jsonplaceholder.typicode.com/users", {
      signal: SantiagoControlador.signal
    });

    let SantiagoDatos = await SantiagoRespuesta.json();
    console.log(SantiagoDatos);
  } catch (SantiagoError) {
    console.log("Petición cancelada:", SantiagoError.message);
  }
}

SantiagoPeticionConTimeout();
