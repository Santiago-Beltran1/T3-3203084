// Ejercicio 33: Convertidor entre bases (binario, decimal, hex)
function convertirBase(valor, desdeBase, aBase) {
  try {
    const decimal = parseInt(String(valor), desdeBase);
    if (isNaN(decimal)) return 'Valor inválido para la base indicada';
    return decimal.toString(aBase).toUpperCase();
  } catch (e) { return 'Error'; }
}
console.log('Ej33:', convertirBase('1010', 2, 10), convertirBase('255',10,16));
