//POO de un vehículo

//Se define la clase
//Se usa un constructor que es un método que se ejecuta al crear el objeto
// this para referirse al objeto actual
//y new que crea instancias
class SantiagoV {
constructor(SantiagoM, SantiagoMod) {
this.SantiagoMarca = SantiagoM;
this.SantiagoModelo = SantiagoMod;
}

SantiagoObtDes() {
return `Marca: ${this.SantiagoMarca}, Modelo: ${this.SantiagoModelo}`;
}
}

const SantiagoMi = new SantiagoV("Nissan", "Serie X");
console.log(SantiagoMi.SantiagoObtDes());

export default SantiagoV;