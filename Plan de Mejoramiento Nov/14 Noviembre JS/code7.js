//Calculadora de Impuestos
const prompt = require('prompt-sync') ();
const SantiagoTasa = 0.15;

//ParseInt solo usa enteros, Number deja usar decimales y convierte a número también
let SantiagoPrecioSTR = prompt("Ingrese el precio:");
let SantiagoPrecio = Number(SantiagoPrecioSTR);

//isNaN -> Not a Number
if (!isNaN(SantiagoPrecio)) {
let SantiagoImps = SantiagoPrecio * SantiagoTasa;
let SantiagoR = SantiagoPrecio + SantiagoImps;

// Se usa .toFixed para limitar el número de decimales al que se requieran
console.log("Precio base:", SantiagoPrecio);
console.log("Impuesto (15%):", SantiagoImps.toFixed(2));
console.log("Total a pagar:", SantiagoR.toFixed(2));
} else {
console.log("Error: Entrada inválida");
}