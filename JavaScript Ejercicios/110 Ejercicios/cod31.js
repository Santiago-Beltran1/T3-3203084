// Ejercicio 31: Impuestos por rangos (ejemplo progresivo)
const tramos = [
  { hasta: 1000000, tasa: 0.0 },
  { hasta: 3000000, tasa: 0.1 },
  { hasta: 7000000, tasa: 0.15 },
  { hasta: Infinity, tasa: 0.2 }
];
function impuestoPorIngreso(ingreso) {
  if (ingreso < 0) return 'Ingreso inválido';
  let restante = ingreso;
  let totalImpuesto = 0;
  let acumulado = 0;
  for (const tramo of tramos) {
    const limite = tramo.hasta - acumulado;
    const sujeto = Math.min(restante, limite);
    if (sujeto <= 0) break;
    totalImpuesto += sujeto * tramo.tasa;
    restante -= sujeto;
    acumulado += sujeto;
  }
  return { ingreso, impuesto: +totalImpuesto.toFixed(2), neto: +(ingreso - totalImpuesto).toFixed(2) };
}
console.log('Ej31:', impuestoPorIngreso(5000000));
