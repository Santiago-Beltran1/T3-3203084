// Ejercicio 21: Calculadora con switch (Node/browser)
// Uso: calculadoraSwitch(12, 3, '+')
function calculadoraSwitch(a, b, op) {
  if (typeof a !== 'number' || typeof b !== 'number') return 'Entrada inválida: números requeridos';
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/':
      if (b === 0) return 'Error: división por cero';
      return a / b;
    case '%':
      if (b === 0) return 'Error: módulo por cero';
      return a % b;
    default: return 'Operador inválido. Usa + - * / %';
  }
}
// Demos
console.log('Ej21:', calculadoraSwitch(10, 5, '+')); // 15
console.log('Ej21:', calculadoraSwitch(10, 0, '/')); // Error: división por cero
