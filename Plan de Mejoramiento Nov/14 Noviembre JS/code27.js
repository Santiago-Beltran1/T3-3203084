//POO vehículo pero con getters y setters

class SantiagoA {
constructor(SantiagoM, SantiagoVI) {
this.SantiagoMarca = SantiagoM;
this.SantiagoVelocidad = SantiagoVI;
}

set SantiagoV(SantiagoR) {
if (SantiagoR >= 0) {
this.SantiagoVelocidad = SantiagoR;
} else {
console.log("Error: Velocidad no puede ser negativa");
}
}

get SantiagoV() {
return this.SantiagoVelocidad;
}
}

const SantiagoCar = new SantiagoA("Ford", 80);
console.log("Velocidad:", SantiagoCar.SantiagoV); // Usa getter
SantiagoCar.SantiagoV = 120; // Usa setter que solo permite valores positivos
SantiagoCar.SantiagoV = -50; // Setter que no permite valores negativos


// EJERCICIO 23 DE LA GUÍA 