// Ej68: Buscar y reemplazar en array (todos los valores)
function buscarReemplazar(arr, busq, nuevo){
  return arr.map(x => x === busq ? nuevo : x);
}
console.log(buscarReemplazar([1,2,3,2],2,99));
