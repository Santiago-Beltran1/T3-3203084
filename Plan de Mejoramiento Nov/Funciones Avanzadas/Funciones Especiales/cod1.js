// Función que recibe otra función como parámetro
function SantiagoEjecutarOperacion(SantiagoA, SantiagoB, SantiagoOperacion) {
  return SantiagoOperacion(SantiagoA, SantiagoB);
}

function SantiagoSumar(SantiagoX, SantiagoY) {
  return SantiagoX + SantiagoY;
}

function SantiagoMultiplicar(SantiagoX, SantiagoY) {
  return SantiagoX * SantiagoY;
}

console.log(SantiagoEjecutarOperacion(5, 3, SantiagoSumar));
console.log(SantiagoEjecutarOperacion(5, 3, SantiagoMultiplicar));
