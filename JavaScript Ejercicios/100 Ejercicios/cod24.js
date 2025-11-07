// Convertir Lista de Objetos a JSON
const lista = [
  { producto: "Teclado", precio: 120 },
  { producto: "Mouse", precio: 60 }
];

const json = JSON.stringify(lista);
console.log(json);
