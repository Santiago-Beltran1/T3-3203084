// Crear lista sin repetir elementos
function eliminarDuplicados(lista) {
  return [...new Set(lista)];
}

// Ejemplo:
console.log(eliminarDuplicados(["a", "b", "a", "c", "b"])); 
