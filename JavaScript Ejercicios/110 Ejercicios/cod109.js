// Ej109: Tipo de triángulo con ternario (usa lógica y luego ternario)
const tipoTriangulo = (a,b,c) => (a+b<=c||a+c<=b||b+c<=a) ? 'No válido' :
  (a===b && b===c ? 'Equilátero' : (a===b||a===c||b===c ? 'Isósceles' : 'Escaleno'));
console.log(tipoTriangulo(3,3,3), tipoTriangulo(3,4,5));
