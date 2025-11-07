// Ejercicio 40: Simulador de dados (N tiradas, caras K)
function simularDados(nTiradas = 1000, caras = 6) {
  const freq = Array(caras).fill(0);
  for (let i=0;i<nTiradas;i++) {
    const cara = Math.floor(Math.random()*caras);
    freq[cara]++;
  }
  const porcentajes = freq.map(f => +(100 * f / nTiradas).toFixed(2));
  return { freq, porcentajes, tiradas: nTiradas, caras };
}
console.log('Ej40:', simularDados(500,6));
