// Ej95: Generador simple de reportes (texto) con estadística
function generarReporte(datos){
  const total = datos.length;
  const suma = datos.reduce((a,b)=>a+b,0);
  const media = +(suma/total).toFixed(2);
  return `Reporte\nTotal: ${total}\nSuma: ${suma}\nMedia: ${media}\n`;
}
console.log(generarReporte([10,20,30,40]));
