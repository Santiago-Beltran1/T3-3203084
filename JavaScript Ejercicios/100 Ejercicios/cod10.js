// Programa 8: CRUD Básico con Array de Objetos
let productos = [];

function crearProducto(nombre, precio) {
  productos.push({ id: productos.length + 1, nombre, precio });
}

function leerProductos() {
  return productos;
}

function actualizarProducto(id, nuevoNombre, nuevoPrecio) {
  const p = productos.find(prod => prod.id === id);
  if (p) { p.nombre = nuevoNombre; p.precio = nuevoPrecio; }
}

function eliminarProducto(id) {
  productos = productos.filter(p => p.id !== id);
}

crearProducto("XBOX Series S", 2000000);
crearProducto("Nintendo Switch", 3000000);
actualizarProducto(2, "Mouse inalámbrico", 150000);
eliminarProducto(1);
console.log(leerProductos());
