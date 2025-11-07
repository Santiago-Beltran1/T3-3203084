// Ej92: Búsqueda binaria en array ordenado
function busquedaBinaria(arr,target){
  let l=0,r=arr.length-1;
  while(l<=r){
    const m = Math.floor((l+r)/2);
    if(arr[m]===target) return m;
    if(arr[m]<target) l=m+1; else r=m-1;
  }
  return -1;
}
console.log(busquedaBinaria([1,3,5,7],5));
