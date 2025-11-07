// Calculadora con Funciones y Switch
function calcular(a, b, operacion) {
  switch (operacion) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Error: división entre 0';
    default: return 'Operación no válida';
  }
}

console.log(calcular(5, 3, '+'));
console.log(calcular(10, 0, '/'));
