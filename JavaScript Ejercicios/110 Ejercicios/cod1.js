// Ejercicio 1: Calculadora básica 
function calculadora(a, b, operador) {
  switch (operador) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b === 0 ? 'Error: división por cero' : a / b;
    default: return 'Operador inválido';
  }
}

console.log('Ej01:', calculadora(49, 484, '+')); 
console.log('Ej01:', calculadora(50, 4, '/')); 

