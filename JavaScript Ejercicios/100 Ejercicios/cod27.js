// Contar la Frecuencia de Cada Letra
function frecuenciaLetras(texto) {
  const conteo = {};
  for (let letra of texto.toLowerCase()) {
    if (/[a-záéíóúñ]/.test(letra)) {
      conteo[letra] = (conteo[letra] || 0) + 1;
    }
  }
  return conteo;
}

console.log(frecuenciaLetras("Javascript es genial"));
