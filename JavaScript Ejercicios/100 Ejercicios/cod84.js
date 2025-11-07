// Sistema de calificaciones
function calcularNota(promedio) {
  if (promedio >= 90) return "A";
  if (promedio >= 80) return "B";
  if (promedio >= 70) return "C";
  if (promedio >= 60) return "D";
  return "F";
}

console.log(calcularNota(87));
