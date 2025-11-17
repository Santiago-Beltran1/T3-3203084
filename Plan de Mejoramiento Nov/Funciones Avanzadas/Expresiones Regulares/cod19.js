// Validar fechas con formato específico
let SantiagoRegexFecha = /^([0-2]\d|3[0-1])\/(0\d|1[0-2])\/\d{4}$/;

console.log(SantiagoRegexFecha.test("25/12/2024"));
console.log(SantiagoRegexFecha.test("99/99/9999"));
