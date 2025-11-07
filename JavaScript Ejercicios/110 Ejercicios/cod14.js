// Ejercicio 14: Factorial iterativo (para enteros >=0)
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) return 'Inválido';
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}
console.log('Ej14:', factorial(5)); // 120
