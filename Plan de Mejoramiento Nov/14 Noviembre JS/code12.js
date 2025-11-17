// Creación de array - y manipulación y verificación de datos del mismo en este caso .length, .push y .pop

let SantiagoEQPS = ["Millonarios", "Nacional", "Cali"];

//Aquí con .length se indica cuántos elementos hay en el array
console.log("Número de elementos que hay:", SantiagoEQPS.length); 

// .push es para agregar al final y además con length se indican los nuevos elementos 
SantiagoEQPS.push("Once Caldas");
console.log("Después de push:", SantiagoEQPS.length);
console.log("Equipos:", SantiagoEQPS);

// .pop remueve el elemento final del array
let SantiagoEQPEliminado = SantiagoEQPS.pop();
console.log("Equipo removido:", SantiagoEQPEliminado); 
console.log("Equipos restantes:", SantiagoEQPS.length); 