// Generar Matriz Identidad
function matrizIdentidad(n) {
  const matriz = [];
  for (let i = 0; i < n; i++) {
    const fila = [];
    for (let j = 0; j < n; j++) {
      fila.push(i === j ? 1 : 0);
    }
    matriz.push(fila);
  }
  return matriz;
}

console.log(matrizIdentidad(4));
