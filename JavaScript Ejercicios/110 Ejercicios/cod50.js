// Ej50: Verificar si número es palíndromo
function esPalindromoNum(n){
  const s = String(Math.abs(Math.trunc(n)));
  return s === s.split('').reverse().join('');
}
console.log(esPalindromoNum(1221), esPalindromoNum(123));
