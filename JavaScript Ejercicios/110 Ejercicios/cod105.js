// Ej105: Clasificación por edad con ternario
const categoriaEdad = edad => (edad<18?'menor':(edad<65?'adulto':'senior'));
console.log(categoriaEdad(30));
