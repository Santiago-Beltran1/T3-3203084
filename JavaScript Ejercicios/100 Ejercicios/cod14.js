// Contar la Cantidad de Palabras por Longitud
function contarPorLongitud(texto) {
  const palabras = texto.split(/\s+/);
  const resultado = {};

  for (let palabra of palabras) {
    const longitud = palabra.length;
    resultado[longitud] = (resultado[longitud] || 0) + 1;
  }

  return resultado;
}

console.log(contarPorLongitud("Yo soy David Santiago Beltran Pedraza"));
