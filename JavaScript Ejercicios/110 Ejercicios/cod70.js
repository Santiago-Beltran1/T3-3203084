// Ej70: Encontrar elementos faltantes en secuencia (suponiendo 1..n)
function faltantes(arr){
  const max = Math.max(...arr);
  const set = new Set(arr);
  const miss = [];
  for(let i=1;i<=max;i++) if(!set.has(i)) miss.push(i);
  return miss;
}
console.log(faltantes([1,2,4,6]));
