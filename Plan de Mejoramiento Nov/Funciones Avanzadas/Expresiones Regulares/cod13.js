// Validar palabra con letra opcional
let SantiagoRegexColor = /colou?r/;

console.log(SantiagoRegexColor.test("color"));  // true
console.log(SantiagoRegexColor.test("colour")); // true
