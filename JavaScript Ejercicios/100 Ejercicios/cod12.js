// Sumar los Elementos de una Matriz
function sumarMatriz(matriz) {
  let suma = 0;
  for (let fila of matriz) {
    for (let valor of fila) {
      suma += valor;
    }
  }
  return suma;
}

console.log(sumarMatriz([[1, 2], [3, 4], [5, 6]]));
