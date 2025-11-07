// Simulación de Carrito de Compras
let carrito = [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
}

function totalCarrito() {
  return carrito.reduce((total, prod) => total + prod.precio, 0);
}

function vaciarCarrito() {
  carrito = [];
}

agregarAlCarrito("Libro", 40);
agregarAlCarrito("Camiseta", 70);
console.log("Total:", totalCarrito());
vaciarCarrito();
console.log("Carrito vacío:", carrito);
