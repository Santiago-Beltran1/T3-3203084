// Ej48: Contar vocales en una cadena
function contarVocales(s){
  if(typeof s!=='string') return 0;
  return (s.match(/[aeiouáéíóúü]/gi) || []).length;
}
console.log(contarVocales('Programación'));
