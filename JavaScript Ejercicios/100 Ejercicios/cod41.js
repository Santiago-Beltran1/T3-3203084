// Convertidor de Temperaturas
function convertirTemperatura(valor, tipo) {
  if (tipo === 'C') {
    return (valor * 9/5) + 32; // Celsius a Fahrenheit
  } else if (tipo === 'F') {
    return (valor - 32) * 5/9; // Fahrenheit a Celsius
  } else {
    return 'Tipo no válido';
  }
}

// Ejemplo:
console.log(convertirTemperatura(100, 'C')); 
console.log(convertirTemperatura(212, 'F'));
