// Ej49: Invertir número (123 -> 321)
function invertirNumero(n){
  const sign = Math.sign(n);
  const inv = Number(String(Math.abs(Math.trunc(n))).split('').reverse().join(''));
  return sign * inv;
}
console.log(invertirNumero(12345));
