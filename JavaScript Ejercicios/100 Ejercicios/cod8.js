// Palabras más Largas de un Texto
function palabraMasLarga(texto) {
  const palabras = texto.split(/\s+/);
  let max = palabras[0];

  for (let palabra of palabras) {
    if (palabra.length > max.length) max = palabra;
  }
  return max;
}

console.log(palabraMasLarga("David Santiago Beltran Pedraza"));
