// Métodos: replace() y replaceAll()
let SantiagoTextoReplace = "uno uno dos tres tres cuatro cinco uno uno";

let SantiagoUnaVez = SantiagoTextoReplace.replace("uno", "dos");     // Solo primera coincidencia
let SantiagoTodas = SantiagoTextoReplace.replaceAll("uno", "cinco");   // Todas las coincidencias

console.log(SantiagoUnaVez);
console.log(SantiagoTodas);
