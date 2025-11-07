// Ej85: Formateador de fechas entre formatos comunes
function formatearDate(date, formato='dd/mm/yyyy'){
  const d = new Date(date);
  if(isNaN(d)) return 'Fecha inválida';
  const dd = String(d.getDate()).padStart(2,'0'), mm = String(d.getMonth()+1).padStart(2,'0'), yyyy = d.getFullYear();
  if(formato==='dd/mm/yyyy') return `${dd}/${mm}/${yyyy}`;
  if(formato==='mm-dd-yyyy') return `${mm}-${dd}-${yyyy}`;
  if(formato==='yyyy.mm.dd') return `${yyyy}.${mm}.${dd}`;
  return d.toISOString();
}
console.log(formatearDate('2023-11-05','dd/mm/yyyy'));
