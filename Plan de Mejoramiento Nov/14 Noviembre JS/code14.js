// Filtrado con .filter()

let SantiagoTemps = [12, 10, 22, 32, 45, 74, 51];

// Se crea un arrow (SantiagoT => SantiagoT > 50) donde 
//En donde si el elemento es mayor a 50 retorna true y se incluye
//.filter crea un nuevo array con solo los números del arrow definido
let SantiagoM = SantiagoTemps.filter(SantiagoT => SantiagoT > 50);

console.log("Originales:", SantiagoTemps);
console.log("Mayores a 50:", SantiagoM);
// Resultado: [74, 51]