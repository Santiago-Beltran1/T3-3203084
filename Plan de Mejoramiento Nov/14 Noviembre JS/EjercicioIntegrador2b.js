// Uso del sistema del inventario

// Crear instancia del inventario
const santiagoMiInventario = new SantiagoInventario();

// Agregar productos varios
const santiagoCel = new SantiagoProductoElectronico(
  "Oppo A5 5g",
  1000000,
  17
);

const santiagoPC = new SantiagoProductoElectronico(
  "Asus TUF",
  3500000,
  5
);

const santiagoPanela = new SantiagoProductoAlimenticio(
  "Panela",
  3000,
  "2025-11-11"
);

const santiagoPollo = new SantiagoProductoAlimenticio(
  "Muslo de Pollo",
  2000,
  "2025-11-11"
);

// Agregar al inventario
santiagoMiInventario.santiagoAgregarProducto(santiagoCel);
santiagoMiInventario.santiagoAgregarProducto(santiagoPC);
santiagoMiInventario.santiagoAgregarProducto(santiagoPanela);
santiagoMiInventario.santiagoAgregarProducto(santiagoPollo);

// Mostrar inventario completo
santiagoMiInventario.santiagoMostrarInventario();

// Buscar productos por categoría
const santiagoElectronicos = santiagoMiInventario.santiagoBuscarPorCategoria("Electrónico");
console.log("\n=== PRODUCTOS ELECTRÓNICOS ===");
console.log(santiagoElectronicos);

// Calcular valor total
const santiagoValorTotal = santiagoMiInventario.santiagoCalcularValorTotal();
console.log(`\nValor total del inventario: $${santiagoValorTotal}`);
