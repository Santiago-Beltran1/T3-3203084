// Ejercicio 32: Clasificador de triángulos
function tipoTriangulo(a,b,c) {
  if ([a,b,c].some(x => typeof x !== 'number' || x <= 0)) return 'Lados inválidos';
  // desigualdad triangular
  if (a + b <= c || a + c <= b || b + c <= a) return 'No es un triángulo válido';
  if (a === b && b === c) return 'Equilátero';
  if (a === b || a === c || b === c) return 'Isósceles';
  return 'Escaleno';
}
console.log('Ej32:', tipoTriangulo(3,3,3), tipoTriangulo(3,4,5));
