// Generador de Números Aleatorios
function generarNumeros(cantidad, min, max) {
  const numeros = [];
  for (let i = 0; i < cantidad; i++) {
    numeros.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return numeros;
}

console.log(generarNumeros(5, 1, 10));
