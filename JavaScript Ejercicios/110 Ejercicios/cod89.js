// Ej89: Invertir y capitalizar palabras
function invertirCapitalizar(s){
  return s.split(' ').map(w => w.split('').reverse().join('').replace(/^\w/,c=>c.toUpperCase())).join(' ');
}
console.log(invertirCapitalizar('hola mundo'));
