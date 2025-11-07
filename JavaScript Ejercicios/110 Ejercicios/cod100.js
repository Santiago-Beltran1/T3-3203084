// Ej100: Buscar subcadenas y estadísticas 
function contarOcurrencias(text, sub){
  const re = new RegExp(sub.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
  return (text.match(re) || []).length;
}
console.log(contarOcurrencias('david david david','david'));
