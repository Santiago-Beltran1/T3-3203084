// Ejercicio 37: Sistema de puntos de lealtad (reglas simple)
function puntosPorCompra(monto) {
  if (monto <= 0) return 0;
  // ejemplo: 1 punto por cada 1000 hasta 5000, 2 puntos por cada 1000 sobre 5000
  const base = Math.floor(Math.min(monto,5000)/1000);
  const extra = Math.floor(Math.max(0,monto-5000)/1000) * 2;
  return base + extra;
}
console.log('Ej37:', puntosPorCompra(7200)); // 5 + 4 = 9
