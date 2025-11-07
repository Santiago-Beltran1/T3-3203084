// Ejercicio 22: Día de la semana
function diaSemana(n) {
  switch (n) {
    case 1: return 'Lunes';
    case 2: return 'Martes';
    case 3: return 'Miércoles';
    case 4: return 'Jueves';
    case 5: return 'Viernes';
    case 6: return 'Sábado';
    case 7: return 'Domingo';
    default: return 'Número inválido (debe ser 1-7)';
  }
}
console.log('Ej22:', diaSemana(1), diaSemana(7), diaSemana(9));
