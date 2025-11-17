//Modificación de una clase para incluir un métofo estático

class SantiagoA {
constructor(SantiagoM, SantiagoMod) {
this.SantiagoMarca = SantiagoM;
this.SantiagoModelo = SantiagoMod;
}

static SantiagoInfo() {
return "Clase base para gestión de vehículos";
}
}

// Llamada desde la clase
console.log(SantiagoA.SantiagoInfo());

// ERROR: No funciona desde instancias
const SantiagoCar = new SantiagoA("Chevrolet", "Camaro");
// carro.informacionGeneral(); // Error