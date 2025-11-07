// Ej43: Factorial con for
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) return 'Inválido';
  let f = 1;
  for (let i = 2; i <= n; i++) f *= i;
  return f;
}
console.log(factorial(5));
