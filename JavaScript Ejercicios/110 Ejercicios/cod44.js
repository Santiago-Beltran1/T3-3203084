// Ej44: Mostrar pares hasta N
function paresHasta(n) {
  const res = [];
  for (let i = 2; i <= n; i += 2) res.push(i);
  return res;
}
console.log(paresHasta(20));
