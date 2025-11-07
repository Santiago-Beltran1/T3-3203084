// Ej57: Todas las tablas 1..10
function todasTablas(){
  const out=[];
  for(let n=1;n<=10;n++){
    out.push(`Tabla ${n}`);
    for(let i=1;i<=10;i++) out.push(`${n} x ${i} = ${n*i}`);
  }
  return out.join('\n');
}
console.log(todasTablas());
