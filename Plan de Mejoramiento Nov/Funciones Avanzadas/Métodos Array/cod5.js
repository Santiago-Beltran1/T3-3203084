// Método: some()
// Devuelve true si al menos un elemento cumple la condición.
let SantiagoNotas = [3.5, 2.1, 5.0, 4.3];

let SantiagoHayAprobados = SantiagoNotas.some(SantiagoNota => SantiagoNota >= 3.0);

console.log(SantiagoHayAprobados);
