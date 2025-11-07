// Palíndromo detector
function esPalindromo(texto) {
  const limpio = texto.toLowerCase().replace(/[\W_]/g, "");
  const inverso = limpio.split("").reverse().join("");
  return limpio === inverso;
}

console.log(esPalindromo("Anita lava la tina"));
