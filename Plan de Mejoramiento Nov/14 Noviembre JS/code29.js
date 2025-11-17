// Composición - Ubicador de personas
class SantiagoDir {
 constructor(SantiagoCalle, SantiagoCodP) {
 this.SantiagoC = SantiagoCalle;
 this.SantiagoCod = SantiagoCodP;
 }
}
class SantiagoCli {
 constructor(SantiagoNom, Santiagod) {
 this.SantiagoNom = SantiagoNom;
 this.SantiagoDir = Santiagod;
 }

 SantiagoMostrar() {
 console.log(`${this.SantiagoNom} vive en:
 ${this.SantiagoDir.SantiagoCalle},
 CP ${this.SantiagoDir.SantiagoCodP}`);
 }
}
const SantiagoMiUbi = new SantiagoDir(
 "Avenida 1", "1111"
);
const Santiago = new SantiagoCli("Santiago Beltran", SantiagoMiUbi);
Santiago.SantiagoMostrar();