// Ej45: Mostrar impares hasta N
function imparesHasta(n) {
  const res = [];
  for (let i = 1; i <= n; i += 2) res.push(i);
  return res;
}
console.log(imparesHasta(15));
