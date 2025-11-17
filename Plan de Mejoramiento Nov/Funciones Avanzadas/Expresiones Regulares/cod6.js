// match devuelve un array con coincidencias
let SantiagoCadenaMatch = "abc123xyz456";

let SantiagoEncontrados = SantiagoCadenaMatch.match(/\d+/g); // números de más de un dígito

console.log(SantiagoEncontrados);
