// Ej99: Generador de reporte con "gráficos" de texto (histograma simple)
function reporteConHistograma(nums){
  const max = Math.max(...nums);
  return nums.map(n => `${n}: ${'*'.repeat(Math.round((n/max)*20))}`).join('\n');
}
console.log(reporteConHistograma([5,15,10,20]));
