// Ejercicio 15: n-ésimo Fibonacci (iterativo)
function fibonacci(n) {
  if (!Number.isInteger(n) || n < 0) return 'Inválido';
  if (n === 0) return 0;
  let a = 0, b = 1;
  for (let i = 1; i < n; i++) [a,b] = [b, a+b];
  return b;
}
console.log('Ej15:', fibonacci(7)); // 13
