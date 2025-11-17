// Método: map()
// Crea un nuevo array aplicando una transformación a cada elemento.
let SantiagoOriginales = [1, 2, 3, 4];

let SantiagoDobles = SantiagoOriginales.map(SantiagoNumero => {
  return SantiagoNumero * 2;
});

console.log(SantiagoDobles);
