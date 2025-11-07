// Ejercicio 13: Verificar número primo (simple)
function esPrimo(n) {
  if (n <= 1 || !Number.isInteger(n)) return false;
  if (n <= 3) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) if (n % i === 0) return false;
  return true;
}
console.log('Ej13:', esPrimo(97)); // true
