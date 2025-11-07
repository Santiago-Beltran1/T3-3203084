// Ejercicio 26: Sistema de calificaciones (0-100 a A-F)
function calificacionLetra(puntuacion) {
  if (typeof puntuacion !== 'number' || puntuacion < 0 || puntuacion > 100) return 'Puntuación inválida 0-100';
  if (puntuacion >= 90) return 'A';
  if (puntuacion >= 80) return 'B';
  if (puntuacion >= 70) return 'C';
  if (puntuacion >= 60) return 'D';
  return 'F';
}
console.log('Ej26:', calificacionLetra(95), calificacionLetra(72), calificacionLetra(50));
