// Funcionamiento del Ejercicio sobre inventariado

// Clase base
class SantiagoProducto {
  constructor(santiagoNombre, santiagoPrecio, santiagoCategoria) {
    this.santiagoNombre = santiagoNombre;
    this.santiagoPrecio = santiagoPrecio;
    this.santiagoCategoria = santiagoCategoria;
  }
}

// Producto Electrónico
class SantiagoProductoElectronico extends SantiagoProducto {
  constructor(santiagoNombre, santiagoPrecio, santiagoGarantiaMeses) {
    super(santiagoNombre, santiagoPrecio, "Electrónico");
    this.santiagoGarantiaMeses = santiagoGarantiaMeses;
  }
}

// Producto Alimenticio
class SantiagoProductoAlimenticio extends SantiagoProducto {
  constructor(santiagoNombre, santiagoPrecio, santiagoFechaVencimiento) {
    super(santiagoNombre, santiagoPrecio, "Alimenticio");
    this.santiagoFechaVencimiento = santiagoFechaVencimiento;
  }
}

// Sistema de inventario
class SantiagoInventario {
  constructor() {
    this.santiagoProductos = [];
  }

  santiagoAgregarProducto(santiagoProducto) {
    this.santiagoProductos.push(santiagoProducto);
    console.log(`Producto agregado: ${santiagoProducto.santiagoNombre}`);
  }

  santiagoBuscarPorCategoria(santiagoCategoria) {
    return this.santiagoProductos.filter(
      p => p.santiagoCategoria === santiagoCategoria
    );
  }

  santiagoCalcularValorTotal() {
    return this.santiagoProductos.reduce(
      (acc, p) => acc + p.santiagoPrecio,
      0
    );
  }

  santiagoMostrarInventario() {
    console.log("\n=== INVENTARIO ===");
    this.santiagoProductos.forEach((p, i) => {
      console.log(
        `${i}. ${p.santiagoNombre} - $${p.santiagoPrecio} - ${p.santiagoCategoria}`
      );
    });
  }
}

