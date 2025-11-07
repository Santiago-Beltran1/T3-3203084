// Contar Palabras Repetidas en Varias Frases
function contarEnFrases(frases) {
  const conteo = {};
  for (let frase of frases) {
    const palabras = frase.toLowerCase().split(/\s+/);
    for (let palabra of palabras) {
      conteo[palabra] = (conteo[palabra] || 0) + 1;
    }
  }
  return conteo;
}

console.log(contarEnFrases(["hola mundo", "mundo js", "hola js"]));
