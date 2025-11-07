// Ej90: Media y desviación estándar
function estadisticaBasica(nums){
  const n = nums.length;
  const mean = nums.reduce((a,b)=>a+b,0)/n;
  const varianza = nums.reduce((s,x)=>s + Math.pow(x-mean,2),0)/n;
  return {media:+mean.toFixed(3), desviacion:+Math.sqrt(varianza).toFixed(3)};
}
console.log(estadisticaBasica([1,2,3,4,5]));
