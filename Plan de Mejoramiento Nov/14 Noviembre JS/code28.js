//Patrón Singleton

class SantiagoBD {
constructor(SantiagoURL) {
if (SantiagoBD.instancia) {
return SantiagoBD.instancia;
}

this.SantiagoURL = SantiagoURL;
this.SantiagoConect = true;
SantiagoBD.instancia = this;
}
}

const SantiagoDB1 = new SantiagoBD("servidor_prod");
const SantiagoDB2 = new SantiagoBD("servidor_test");

console.log("URL db1:", SantiagoDB1.SantiagoURL); // "servidor_prod"
console.log("URL db2:", SantiagoDB2.SantiagoURL); // "servidor_prod"
console.log("¿Misma instancia?", SantiagoDB1 === SantiagoDB2); // true