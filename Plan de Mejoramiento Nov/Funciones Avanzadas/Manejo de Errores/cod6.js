// Promise.race devuelve la promesa que se resuelve más rápido
function SantiagoRapida() {
  return new Promise(res => setTimeout(() => res("Promesa rápida"), 500));
}

function SantiagoLenta() {
  return new Promise(res => setTimeout(() => res("Promesa lenta"), 2000));
}

async function SantiagoPrimeraPromesa() {
  let SantiagoGanador = await Promise.race([SantiagoRapida(), SantiagoLenta()]);

  console.log("Primero en completar:", SantiagoGanador);
}

SantiagoPrimeraPromesa();
