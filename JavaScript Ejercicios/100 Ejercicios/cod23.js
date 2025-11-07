// Sumar Todos los Números en un Array de Arrays
function sumarTodo(arr) {
  let suma = 0;
  for (let fila of arr) {
    for (let num of fila) {
      suma += num;
    }
  }
  return suma;
}

console.log(sumarTodo([[1,2,3],[4,5,6],[7,8,9]]));
