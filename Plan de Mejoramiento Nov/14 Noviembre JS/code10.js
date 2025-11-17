// Función para Verificar Números Pares


//se define una función con function
// % Sirve para devolver el resto de una división
function SantiagoVer(SantiagoN) {
if (SantiagoN % 2 === 0) {
console.log(SantiagoN + " es par");
} else {
console.log(SantiagoN + " es impar");
}
}

// Pruebas
SantiagoVer(17); 
SantiagoVer(20); 
SantiagoVer(0); 
SantiagoVer(-7);
