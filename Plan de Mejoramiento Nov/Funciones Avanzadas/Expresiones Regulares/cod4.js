// Validación simple de número telefónico
let SantiagoRegexTelefono = /^[0-9]{7,10}$/;

console.log(SantiagoRegexTelefono.test("3145678901")); // true
console.log(SantiagoRegexTelefono.test("12345")); // false
