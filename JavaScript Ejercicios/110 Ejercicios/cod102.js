// Ej102: Par o impar con ternario
const parImpar = n => Number.isInteger(n) ? (n%2===0 ? 'par' : 'impar') : 'no entero';
console.log(parImpar(7));
