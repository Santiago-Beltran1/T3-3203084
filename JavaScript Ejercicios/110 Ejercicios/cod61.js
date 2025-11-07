// Ej61: Sumar elementos de un array
function sumaArray(arr){ return arr.reduce((a,b)=>a+(Number(b)||0),0); }
console.log(sumaArray([1,2,3,4]));
