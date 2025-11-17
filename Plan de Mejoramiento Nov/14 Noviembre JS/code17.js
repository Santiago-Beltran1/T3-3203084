// Retorno de precio con un 10% más y uso de .map

let SantiagoP = [100, 250, 399, 75];

//Se crea un nuevo array con la función .map el cual transforma todos los elementos
//y en el arrow se define que los elemetos reciban el aumentode del 10%
let SantiagoA = SantiagoP.map(SantiagoPP => SantiagoPP * 1.10);

console.log("Originales:", SantiagoP);
console.log("Con 10% aumento:", SantiagoA);
// [110, 275, 438.9, 82.5]