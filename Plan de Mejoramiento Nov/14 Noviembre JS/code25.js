// Creacón de vehículo que hereda una caracteristica de un auto

// Clase base del vehículo
class SantiagoA {
    constructor(SantiagoM, SantiagoMod) {
        this.SantiagoMarca = SantiagoM;
        this.SantiagoModelo = SantiagoMod;
    }

    SantiagoObtDes() {
        return `Marca: ${this.SantiagoMarca}, Modelo: ${this.SantiagoModelo}`;
    }
}

// Clase que hereda de Auto
//Extends establece esa relación de herencia
//super llama al constructor de esa clase padre
//super.metodo accede a esos métodos del padre
class SantiagoElec extends SantiagoA {
    constructor(SantiagoM, SantiagoMod, SantiagoAut) {
        super(SantiagoM, SantiagoMod);
        this.SantiagoAutBat = SantiagoAut;
    }

    SantiagoInfo() {
        return `${super.SantiagoObtDes()},
Autonomía: ${this.SantiagoAutBat} km`;
    }
}

const SantiagoNissan = new SantiagoElec("Nissan", "SR", 600);
console.log(SantiagoNissan.SantiagoInfo());
