// Ej63: Rotación de array k posiciones a la derecha
function rotarDerecha(arr,k){
  if(!Array.isArray(arr)) return [];
  k = ((k%arr.length)+arr.length)%arr.length;
  return arr.slice(-k).concat(arr.slice(0,-k));
}
console.log(rotarDerecha([1,2,3,4,5],2));
