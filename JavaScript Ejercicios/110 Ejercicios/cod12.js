// Ejercicio 12: Sumar dígitos de un número (positivo)
function sumarDigitos(n) {
  n = Math.abs(Math.trunc(n));
  return String(n).split('').reduce((s,d)=>s+Number(d), 0);
}
console.log('Ej12:', sumarDigitos(12345)); // 15
