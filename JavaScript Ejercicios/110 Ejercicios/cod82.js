// Ej82: Calculadora modular (funciones separadas)
const sum = (a,b)=>a+b;
const sub = (a,b)=>a-b;
const mul = (a,b)=>a*b;
const div = (a,b)=> b===0? 'Error' : a/b;
console.log(sum(3,4), sub(5,2), mul(2,3), div(6,2));
