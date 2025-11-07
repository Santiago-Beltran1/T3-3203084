// Filtrar Productos por Categoría
const productos = [
  { nombre: "tenis adidas", categoria: "Ropa" },
  { nombre: "medias navideñas", categoria: "Ropa" },
  { nombre: "Iphone", categoria: "Tecnología" },
  { nombre: "Mouse Gamer", categoria: "Tecnología" }
];

function filtrarPorCategoria(categoria) {
  return productos.filter(p => p.categoria === categoria);
}

// Ejemplo:
console.log(filtrarPorCategoria("Ropa"));
