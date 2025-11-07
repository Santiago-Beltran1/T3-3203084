// Encontrar el Mayor y Menor en un Arreglo
function extremos(arr) {
  let mayor = arr[0], menor = arr[0];
  for (let num of arr) {
    if (num > mayor) mayor = num;
    if (num < menor) menor = num;
  }
  return { mayor, menor };
}

console.log(extremos([5, 8, 1, 10, 3]));
