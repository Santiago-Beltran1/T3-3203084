//Detector de edad con operador ternario


//La condición ? valorSiVerdadero:valorSiFalso
//Es una forma compacta de escribir if-else cuando solo necesitas retornar un valor basado en una condición simple.
const SantiagoVef = (SantiagoE)=>
SantiagoE >= 18 ? "Permitido" :
"Denegado";

console.log("17 años:",
SantiagoVef(17));
// "Denegado"

console.log("19 años:",
SantiagoVef(19));
// "Permitido"