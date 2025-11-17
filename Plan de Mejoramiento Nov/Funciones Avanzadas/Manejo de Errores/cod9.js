// Proceso asincrónico paso por paso
async function SantiagoProcesoLargo() {
  console.log("Paso 1");
  await SantiagoDelay(500);

  console.log("Paso 2");
  await SantiagoDelay(500);

  console.log("Paso 3");
  await SantiagoDelay(500);

  console.log("Proceso completado");
}

SantiagoProcesoLargo();
