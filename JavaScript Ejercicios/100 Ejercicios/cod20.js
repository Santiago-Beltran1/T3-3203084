// Simulación de Inventario con Operaciones
let inventario = [
  { nombre: "Teclado", cantidad: 10 },
  { nombre: "Mouse", cantidad: 5 }
];

function agregarProducto(nombre, cantidad) {
  inventario.push({ nombre, cantidad });
}

function venderProducto(nombre, cantidadVendida) {
  for (let item of inventario) {
    if (item.nombre === nombre && item.cantidad >= cantidadVendida) {
      item.cantidad -= cantidadVendida;
      return `${cantidadVendida} unidades vendidas de ${nombre}`;
    }
  }
  return "Producto no disponible o sin stock suficiente";
}

agregarProducto("Monitor", 7);
console.log(venderProducto("Mouse", 2));
console.log(inventario);
