// Ej104: Año bisiesto con ternario
const esBisiesto = y => (y%4===0 && y%100!==0) || (y%400===0);
console.log(esBisiesto(2000), esBisiesto(1900));
