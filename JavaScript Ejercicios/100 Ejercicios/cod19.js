// Contador de Palabras Únicas
function palabrasUnicas(texto) {
  const palabras = texto.toLowerCase().split(/\s+/);
  const unicas = [...new Set(palabras)];
  return unicas;
}

console.log(palabrasUnicas("mi nombre es david y mi otro nombre es santiago"));
