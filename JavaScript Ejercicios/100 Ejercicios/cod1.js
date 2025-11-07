// Promedio de Calificaciones
function promedioNotas(notas) {
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  return (suma / notas.length).toFixed(2);
}

console.log(promedioNotas([4.5, 3.8, 5.0, 4.2]));
