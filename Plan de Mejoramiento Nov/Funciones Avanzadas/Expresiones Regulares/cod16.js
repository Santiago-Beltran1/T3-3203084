// exec permite buscar resultados uno por uno en un bucle
let SantiagoRegexNumero = /\d+/g;
let SantiagoTextoExec = "Hay 3 gatos y 12 perros y 100 peces";

let SantiagoMatch;
while ((SantiagoMatch = SantiagoRegexNumero.exec(SantiagoTextoExec)) !== null) {
  console.log("Número encontrado:", SantiagoMatch[0], "en posición:", SantiagoMatch.index);
}
