// Validación de números con símbolo opcional
let SantiagoRegexNumeroEntero = /^-?\d+$/;

console.log(SantiagoRegexNumeroEntero.test("-123"));
console.log(SantiagoRegexNumeroEntero.test("45"));
console.log(SantiagoRegexNumeroEntero.test("3.14"));
