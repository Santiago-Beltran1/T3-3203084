// Calcular Promedio y Nota Máxima
function estadisticas(notas) {
  let suma = 0, max = notas[0];
  for (let n of notas) {
    suma += n;
    if (n > max) max = n;
  }
  return { promedio: (suma / notas.length).toFixed(2), maxima: max };
}

console.log(estadisticas([3.5, 4.2, 5.0, 4.8]));
