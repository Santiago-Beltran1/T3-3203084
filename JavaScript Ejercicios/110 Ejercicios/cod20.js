// Ejercicio 20: Lista de pares hasta N
function paresHasta(n) {
  if (!Number.isInteger(n) || n < 0) return [];
  const res = [];
  for (let i = 0; i <= n; i += 1) if (i % 2 === 0) res.push(i);
  return res;
}
console.log('Ej20:', paresHasta(10)); // [0,2,4,6,8,10]
