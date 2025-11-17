// Métodos: shift() y unshift()
// shift elimina el primero, unshift agrega al inicio.
let SantiagoQueue = ["Tarea1", "Tarea2"];

SantiagoQueue.unshift("Tarea0"); // Agrega al inicio
let SantiagoRemovido = SantiagoQueue.shift(); // Elimina "Tarea0"

console.log(SantiagoQueue);
console.log(SantiagoRemovido);
