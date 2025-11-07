// Ejercicio 36: Clasificación y análisis básico de datos (min, max, avg, mediana)
function analisisArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 'Arreglo vacío o inválido';
  const nums = arr.slice().filter(n => typeof n === 'number').sort((a,b)=>a-b);
  const min = nums[0], max = nums[nums.length-1];
  const suma = nums.reduce((s,x)=>s+x,0);
  const avg = +(suma / nums.length).toFixed(3);
  const mid = Math.floor(nums.length/2);
  const mediana = nums.length % 2 === 1 ? nums[mid] : +(((nums[mid-1]+nums[mid])/2).toFixed(3));
  return { min, max, avg, mediana };
}
console.log('Ej36:', analisisArray([5,2,9,4,7]));
