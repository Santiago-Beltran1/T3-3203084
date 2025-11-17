// Función que genera un contador mediante closure
function SantiagoCrearContador() {
  let SantiagoCuenta = 0;

  return function () {
    SantiagoCuenta++;
    return SantiagoCuenta;
  };
}

let SantiagoContador1 = SantiagoCrearContador();

console.log(SantiagoContador1());
console.log(SantiagoContador1());
console.log(SantiagoContador1());
