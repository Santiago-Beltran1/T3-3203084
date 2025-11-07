// Ejercicio 11: Aplicar descuento
function aplicarDescuento(precio, porcentaje) {
  if (precio < 0) return 'Precio inválido';
  const final = precio * (1 - porcentaje/100);
  return +final.toFixed(2);
}
console.log('Ej11:', aplicarDescuento(200, 15)); // 170.00
