// Método: reduce()
// Acumula valores hasta producir un único resultado.
let SantiagoValores = [10, 20, 30];

let SantiagoSuma = SantiagoValores.reduce((SantiagoAcum, SantiagoActual) => {
  return SantiagoAcum + SantiagoActual;
}, 0);

console.log(SantiagoSuma);
