// Lookbehind positivo (?<= )
let SantiagoRegexBehind = /(?<=\$)\d+/;

console.log(SantiagoRegexBehind.test("El precio es $250000"));
console.log(SantiagoRegexBehind.test("Precio: 300000"));
