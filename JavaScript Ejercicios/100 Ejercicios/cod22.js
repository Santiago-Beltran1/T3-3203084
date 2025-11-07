// Generar Tabla de Multiplicar
function tablaMultiplicar(num) {
  const tabla = [];
  for (let i = 1; i <= 10; i++) {
    tabla.push(`${num} x ${i} = ${num * i}`);
  }
  return tabla;
}

console.log(tablaMultiplicar(7).join('\n'));
