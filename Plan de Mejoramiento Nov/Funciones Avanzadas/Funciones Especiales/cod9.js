// Clase con getters y setters
class SantiagoCuentaBancaria {
  constructor(SantiagoSaldo) {
    this._SantiagoSaldo = SantiagoSaldo;
  }

  get SantiagoSaldo() {
    return this._SantiagoSaldo;
  }

  set SantiagoSaldo(SantiagoNuevoSaldo) {
    if (SantiagoNuevoSaldo >= 0) {
      this._SantiagoSaldo = SantiagoNuevoSaldo;
    }
  }
}

let SantiagoCuenta = new SantiagoCuentaBancaria(500);
SantiagoCuenta.SantiagoSaldo = 1000;

console.log(SantiagoCuenta.SantiagoSaldo);
