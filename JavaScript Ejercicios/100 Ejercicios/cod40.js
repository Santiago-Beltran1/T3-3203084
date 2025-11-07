// Generar un Histograma con Caracteres
function histograma(arr) {
  for (let n of arr) {
    console.log(`${n}: ${'*'.repeat(n)}`);
  }
}

histograma([3, 5, 2, 6]);
