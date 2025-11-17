// Función generadora que produce una secuencia infinita
function* SantiagoGeneradorIDs() {
  let SantiagoID = 1;
  while (true) {
    yield SantiagoID++;
  }
}

let SantiagoGen = SantiagoGeneradorIDs();

console.log(SantiagoGen.next().value);
console.log(SantiagoGen.next().value);
console.log(SantiagoGen.next().value);
