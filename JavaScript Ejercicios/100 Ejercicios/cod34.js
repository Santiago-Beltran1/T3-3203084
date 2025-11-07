// Programa 34: Reemplazar Palabras en un Texto
function reemplazar(texto, buscar, reemplazo) {
  const regex = new RegExp(buscar, 'gi');
  return texto.replace(regex, reemplazo);
}

console.log(reemplazar("Me gusta JavaScript", "JavaScript", "Python"));
