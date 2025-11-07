// Filtro de productos por precio
const productos = [
  { nombre: "Mouse", precio: 30 },
  { nombre: "Teclado", precio: 70 },
  { nombre: "Monitor", precio: 120 }
];

function filtrarProductos(max) {
  return productos.filter(p => p.precio <= max);
}

console.log(filtrarProductos(80));
