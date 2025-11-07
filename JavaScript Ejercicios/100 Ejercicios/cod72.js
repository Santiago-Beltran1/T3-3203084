// Conversor de Monedas
const tasas = { USD: 4000, EUR: 4400, COP: 1 };

function convertir(moneda, cantidad) {
  const cop = cantidad * tasas[moneda];
  console.log(`${cantidad} ${moneda} = ${cop} COP`);
}

// Ejemplo:
convertir("USD", 10);
convertir("EUR", 5);
