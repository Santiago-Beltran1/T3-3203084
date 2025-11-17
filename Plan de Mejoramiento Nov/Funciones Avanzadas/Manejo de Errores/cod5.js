// Promise.all espera a que todas las promesas terminen
function SantiagoCarga1() {
  return new Promise(res => setTimeout(() => res("Carga 1 lista"), 1000));
}

function SantiagoCarga2() {
  return new Promise(res => setTimeout(() => res("Carga 2 lista"), 1500));
}

async function SantiagoEjecutarMultiples() {
  let SantiagoResultados = await Promise.all([SantiagoCarga1(), SantiagoCarga2()]);

  console.log("Resultados:", SantiagoResultados);
}

SantiagoEjecutarMultiples();
