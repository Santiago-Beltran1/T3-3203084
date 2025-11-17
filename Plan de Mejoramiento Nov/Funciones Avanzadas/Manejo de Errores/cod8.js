// Función para pausar ejecución por ms usando promesas
function SantiagoDelay(SantiagoMilisegundos) {
  return new Promise(res => setTimeout(res, SantiagoMilisegundos));
}

async function SantiagoEjecutarDelay() {
  console.log("Esperando 1 segundo...");
  await SantiagoDelay(1000);
  console.log("Listo!");
}

SantiagoEjecutarDelay();
