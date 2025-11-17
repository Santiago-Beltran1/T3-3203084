// Parámetros Rest para recibir múltiples valores
function SantiagoSumarMuchos(...SantiagoNumeros) {
  return SantiagoNumeros.reduce((SantiagoA, SantiagoB) => SantiagoA + SantiagoB, 0);
}

console.log(SantiagoSumarMuchos(1, 2, 3, 4, 5));

// Uso de Spread para expandir arreglos
let SantiagoArreglo = [10, 20, 30];

console.log(...SantiagoArreglo);
