// Ejercicio 10: Números y Años Especiales 
function esBisiesto(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log('Ejemplo:', esBisiesto(2024)); 
console.log('Ejemplo:', esBisiesto(1990)); 
