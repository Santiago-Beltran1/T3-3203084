// Ejercicio 9: Positivo/Negativo/Cero
function signo(n) {
  if (!Number.isFinite(n)) return 'No es número';
  return n > 0 ? 'positivo' : (n < 0 ? 'negativo' : 'cero');
}
console.log('Ej09:', signo(0)); // cero
