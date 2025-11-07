// Análisis de Frecuencia de Palabras
function contarPalabras(texto) {
  const textoLimpio = texto.toLowerCase().replace(/[^\w\sáéíóúñü]/g, '').trim();
  const palabras = textoLimpio.split(/\s+/).filter(p => p.length > 0);

  const conteo = {};
  for (let palabra of palabras) {
    conteo[palabra] = (conteo[palabra] || 0) + 1;
  }

  const resultado = Object.entries(conteo)
    .sort((a, b) => b[1] - a[1])
    .map(([palabra, frecuencia]) => ({ palabra, frecuencia }));

  return resultado;
}

console.log(contarPalabras("David Santiago Beltran Pedraza"));
