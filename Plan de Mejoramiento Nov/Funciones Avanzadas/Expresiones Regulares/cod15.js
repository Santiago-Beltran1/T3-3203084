// Contraseña que exige: mínimo 8 caracteres, 1 mayúscula, 1 número
let SantiagoRegexPassword = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

console.log(SantiagoRegexPassword.test("Santiago123")); 
console.log(SantiagoRegexPassword.test("invalida"));
