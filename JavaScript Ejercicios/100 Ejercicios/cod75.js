// Calculadora de promedio
function calcularPromedio(numeros) {
  const suma = numeros.reduce((acc, n) => acc + n, 0);
  return (suma / numeros.length).toFixed(2);
}

// Ejemplo:
console.log(calcularPromedio([4.5, 3.8, 5.0, 4.0]));
