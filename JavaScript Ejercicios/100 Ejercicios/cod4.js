// Invertir una Cadena
function invertirCadena(texto) {
  let invertida = '';
  for (let i = texto.length - 1; i >= 0; i--) {
    invertida += texto[i];
  }
  return invertida;
}

console.log(invertirCadena("Santiago Beltran"));
