//Identificador de calidad de temperatura en grados Celcius

function SantiagoCT(SantiagoC) {
if (SantiagoC >= 0 && SantiagoC < 12) {
return "Temperatura baja";
} else if (SantiagoC >= 12 && SantiagoC < 22) {
return "Temperatura adecuada";
} else if (SantiagoC >= 22 && SantiagoC < 100) {
return "Temperatura alta";
} else {
return "Temperatura desconocida";

}
}

console.log(SantiagoCT(4)); // "Temperatura baja"
console.log(SantiagoCT(19)); // "Temperatura adecuada"
console.log(SantiagoCT(28)); // "Temperatura alta"