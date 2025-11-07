// Ej46: Patrón de asteriscos (triángulo de N filas)
function trianguloAsteriscos(n) {
  let out = '';
  for (let i = 1; i <= n; i++) {
    out += '*'.repeat(i) + '\n';
  }
  return out;
}
console.log(trianguloAsteriscos(5));
