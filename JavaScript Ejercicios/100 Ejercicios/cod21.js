// Calculadora con Switch (versión extendida)
function calculadora(a, b, operacion) {
  switch (operacion) {
    case '+': return `${a} + ${b} = ${a + b}`;
    case '-': return `${a} - ${b} = ${a - b}`;
    case '*': return `${a} * ${b} = ${a * b}`;
    case '/': return b !== 0 ? `${a} / ${b} = ${(a / b).toFixed(2)}` : "Error: división entre cero";
    case '%': return `${a} % ${b} = ${a % b}`;
    default: return "Operación no reconocida";
  }
}

console.log(calculadora(10, 5, '*'));
console.log(calculadora(8, 0, '/'));
