// Ej42: Suma acumulada 1..N
function sumaHasta(n) {
  if (!Number.isInteger(n) || n < 1) return 0;
  let s = 0;
  for (let i = 1; i <= n; i++) s += i;
  return s;
}
console.log(sumaHasta(100));
