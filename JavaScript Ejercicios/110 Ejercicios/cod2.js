// Ejercicio 2: Par o impar
const esPar = n => Number.isFinite(n) && n % 2 === 0;
console.log('Ejercicio:', esPar(4) ? 'par' : 'impar'); // par
console.log('Ejercicio:', esPar(7) ? 'par' : 'impar'); // impar
