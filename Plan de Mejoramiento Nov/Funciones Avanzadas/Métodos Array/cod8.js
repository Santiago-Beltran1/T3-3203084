// Método: sort()
// Ordena los elementos según el criterio establecido.
let SantiagoNumerosDesordenados = [40, 10, 5, 100, 1];

SantiagoNumerosDesordenados.sort((SantiagoA, SantiagoB) => {
  return SantiagoA - SantiagoB;
});

console.log(SantiagoNumerosDesordenados);
