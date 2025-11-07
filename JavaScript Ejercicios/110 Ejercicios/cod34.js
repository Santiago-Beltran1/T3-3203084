// Ejercicio 34: Calculadora científica simple
const calcCientifica = {
  sin: x => Math.sin(x),
  cos: x => Math.cos(x),
  tan: x => Math.tan(x),
  log: x => x > 0 ? Math.log10(x) : 'Entrada inválida',
  ln: x => x > 0 ? Math.log(x) : 'Entrada inválida',
  pow: (x,y) => Math.pow(x,y),
  sqrt: x => x >= 0 ? Math.sqrt(x) : 'Entrada inválida'
};
console.log('Ej34 sin(0)=', calcCientifica.sin(0), 'log10(100)=', calcCientifica.log(100));
