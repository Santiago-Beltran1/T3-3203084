// Creación de clase con constructor y métodos
class SantiagoLook {
  constructor(SantiagoNombre, SantiagoTipo) {
    this.SantiagoNombre = SantiagoNombre;
    this.SantiagoTipo = SantiagoTipo;
  }

  SantiagoEleccion() {
    return this.SantiagoNombre + " elegir nuevo peinado.";
  }
}

let SantiagoP = new SantiagoLook("El 7", "Taper");

console.log(SantiagoP.SantiagoEleccion());
