//Operaciones al inicio de una array - Edición de clientes

let SantiagoCli = ["Cliente A", "Cliente B", "Cliente C"];
console.log("Cola inicial:", SantiagoCli);

// Atender al primer cliente
//Shift() elimina y retorna el primer elemento y todos los demás se van una posición adelante
let SantiagoAt = SantiagoCli.shift();
console.log("Cliente atendido:", SantiagoAt);
console.log("Cola después de shift:", SantiagoCli);

// Cliente prioritario al inicio
//unshift() agrega elementos al inicio y los existentes se van una posición hacia atrás
SantiagoCli.unshift("Cliente Prioritario");
console.log("Cola final:", SantiagoCli);