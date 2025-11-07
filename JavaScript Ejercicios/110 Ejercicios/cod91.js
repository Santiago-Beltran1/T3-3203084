// Ej91: Convertir entre binario, decimal y hex
function convertirBase(valor, desde, a){
  const dec = parseInt(String(valor), desde);
  if(isNaN(dec)) return 'Valor inválido';
  return dec.toString(a).toUpperCase();
}
console.log(convertirBase('1010',2,10), convertirBase('255',10,16));
