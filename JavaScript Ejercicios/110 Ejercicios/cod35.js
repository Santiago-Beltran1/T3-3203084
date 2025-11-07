// Ejercicio 35: Simulador simple de cajero automático
function crearCuenta(saldoInicial = 0) {
  let saldo = saldoInicial;
  return {
    verSaldo: () => +saldo.toFixed(2),
    depositar: (m) => { if (m <= 0) return 'Monto inválido'; saldo += m; return saldo; },
    retirar: (m) => { if (m <= 0) return 'Monto inválido'; if (m > saldo) return 'Fondos insuficientes'; saldo -= m; return saldo; }
  };
}
const cuenta = crearCuenta(100000);
console.log('Ej35 verSaldo:', cuenta.verSaldo());
console.log('Ej35 retirar 50000:', cuenta.retirar(50000));
console.log('Ej35 depositar 20000:', cuenta.depositar(20000));
