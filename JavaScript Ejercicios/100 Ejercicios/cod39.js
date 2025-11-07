// Comprobar Palíndromo
function esPalindromo(texto) {
  const limpio = texto.toLowerCase().replace(/[\W_]/g, '');
  return limpio === limpio.split('').reverse().join('');
}

console.log(esPalindromo("Anita lava la tina"));
