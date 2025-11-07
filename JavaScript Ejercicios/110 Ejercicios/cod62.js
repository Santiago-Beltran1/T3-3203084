// Ej62: Elementos que aparecen una vez
function elementosUnicos(arr){
  const freq = {};
  arr.forEach(x=>freq[x]=(freq[x]||0)+1);
  return Object.keys(freq).filter(k=>freq[k]===1).map(k=>isNaN(k)?k:Number(k));
}
console.log(elementosUnicos([1,2,2,3,4,4,5]));
