// Lookahead positivo (?= )
let SantiagoRegexLook = /\d+(?=km)/;

console.log(SantiagoRegexLook.test("La distancia es 120km"));
console.log(SantiagoRegexLook.test("La distancia es 50 millas"));
