// Ejercicio 23: Estación del año por mes (1-12)
function estacionPorMes(mes) {
  switch (mes) {
    case 12: case 1: case 2: return 'Invierno';
    case 3: case 4: case 5: return 'Primavera';
    case 6: case 7: case 8: return 'Verano';
    case 9: case 10: case 11: return 'Otoño';
    default: return 'Mes inválido (1-12)';
  }
}
console.log('Ej23:', estacionPorMes(3), estacionPorMes(11));
