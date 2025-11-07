// Ejercicio 5: Conversor entre C y F
const cToF = c => (c * 9/5) + 32;
const fToC = f => (f - 32) * 5/9;
console.log('Ej05 C→F:', cToF(16)); 
console.log('Ej05 F→C:', fToC(64));
