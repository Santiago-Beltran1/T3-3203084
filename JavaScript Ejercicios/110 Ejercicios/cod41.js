// Ej41: Tabla de multiplicar (1..10)
function tablaMultiplicar(n) {
  if (!Number.isFinite(n)) return 'Número inválido';
  const out = [];
  for (let i = 1; i <= 10; i++) out.push(`${n} x ${i} = ${n*i}`);
  return out.join('\n');
}
console.log(tablaMultiplicar(7));
