// Generar un Arreglo con Números Aleatorios Únicos
function numerosUnicos(cantidad, max) {
  const numeros = new Set();
  while (numeros.size < cantidad) {
    numeros.add(Math.floor(Math.random() * max) + 1);
  }
  return Array.from(numeros);
}

console.log(numerosUnicos(5, 20));
