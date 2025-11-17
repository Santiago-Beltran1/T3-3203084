// Validar una URL
let SantiagoRegexURL = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/.*)?$/;

console.log(SantiagoRegexURL.test("https://www.google.com"));
console.log(SantiagoRegexURL.test("no-es-url"));
