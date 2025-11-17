// Detectador de mayor de edad

function SantiagoM(SantiagoE) {
if (SantiagoE >= 18) {
return true;
} else {
return false;
}
}

// Versión simplificada
function SantiagoMS(SantiagoE) {
return SantiagoE >= 18;
}

console.log("Edad 20:", SantiagoM(19)); //verdadero ya que si es mayor de edad
console.log("Edad 16:", SantiagoM(17)); //falso ya que no es mayor

console.log("Edad 20:", SantiagoMS(18)); 
console.log("Edad 16:", SantiagoMS(7)); 