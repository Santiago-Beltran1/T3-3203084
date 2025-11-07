// Ej73: Ordenar array de objetos por campo (ej. edad)
function ordenarPorCampo(arr, campo){
  return arr.slice().sort((a,b)=> (a[campo] > b[campo])?1:-1);
}
const estudiantes = [{nombre:'Ana',edad:22},{nombre:'Luis',edad:19}];
console.log(ordenarPorCampo(estudiantes,'edad'));
