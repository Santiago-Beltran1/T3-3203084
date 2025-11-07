// Ejercicio 17: Fórmulas de velocidad/tiempo/distancia
// velocidad = distancia / tiempo
function velocidad(distancia, tiempo) {
  if (tiempo === 0) return 'Tiempo 0';
  return distancia / tiempo;
}
console.log('Ej17:', velocidad(100, 2)); // 50
