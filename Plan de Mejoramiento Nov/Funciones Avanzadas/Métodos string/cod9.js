// Métodos: match() y search()
let SantiagoTexto = "Mi email es santiago@ejemplo.com";

// Expresión regular básica para email
let SantiagoRegexEmail = /[^\s@]+@[^\s@]+\.[^\s@]+/;

console.log(SantiagoTexto.match(SantiagoRegexEmail));  // Devuelve coincidencia
console.log(SantiagoTexto.search(SantiagoRegexEmail)); // Devuelve índice donde inicia el match
