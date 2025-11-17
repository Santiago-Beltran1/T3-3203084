// Reemplazar todas las vocales por *
let SantiagoTextoReplace = "Este texto tendrá asteriscos";

let SantiagoResultado = SantiagoTextoReplace.replace(/[aeiou]/gi, "*");

console.log(SantiagoResultado);
