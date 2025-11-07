// Ej98: Generador de tablas con formato (string)
function generarTabla(n, hasta=10){
  const lines = [];
  for(let i=1;i<=hasta;i++) lines.push(`${n} x ${i} = ${n*i}`);
  return lines.join('\n');
}
console.log(generarTabla(9));
