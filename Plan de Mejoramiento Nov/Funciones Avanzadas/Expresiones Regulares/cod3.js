// Validar un correo con una RegEx básica
let SantiagoRegexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let SantiagoCorreo = "correo@ejemplo.com";

console.log(SantiagoRegexCorreo.test(SantiagoCorreo)); // true
