// Creamos la clase de un carro para guardarlo en el otro archivo
class SantiagoCar {
 constructor(SantiagoM, SantiagoMod) {
 this.SantiagoMarca = SantiagoM;
 this.SantiagoModel = SantiagoMod;
 }

 SantiagoObt() {
 return `${this.SantiagoMarca} ${this.SantiagoModel}`;
 }
}
export default SantiagoCar;