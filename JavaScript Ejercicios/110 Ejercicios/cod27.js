// Ejercicio 27: Menú de restaurante (simulación simple)
const carta = {
  'hamburguesa': 12000,
  'papas': 5000,
  'gaseosa': 4000,
  'ensalada': 9000
};
function pedir(items, iva = 0.19) {
  // items = [{producto:'hamburguesa', cantidad:2}, ...]
  if (!Array.isArray(items) || items.length === 0) return 'Lista de items requerida';
  let subtotal = 0;
  const detalle = [];
  for (const it of items) {
    const precio = carta[it.producto];
    if (!precio) { detalle.push({ producto: it.producto, error: 'No disponible' }); continue; }
    const monto = precio * (it.cantidad || 1);
    subtotal += monto;
    detalle.push({ producto: it.producto, cantidad: it.cantidad || 1, monto });
  }
  const impuesto = +(subtotal * iva).toFixed(2);
  const total = +(subtotal + impuesto).toFixed(2);
  return { detalle, subtotal, impuesto, total };
}
// Demo
console.log('Ej27:', pedir([{ producto: 'hamburguesa', cantidad: 2 }, { producto: 'papas', cantidad: 1 }]));
