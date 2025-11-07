// Ej75: Promedio de una propiedad (edad)
function promedioProp(arr,prop){
  const nums = arr.map(o=>Number(o[prop])||0);
  return +(nums.reduce((a,b)=>a+b,0)/nums.length).toFixed(2);
}
console.log(promedioProp([{e:20},{e:30},{e:25}],'e'));
