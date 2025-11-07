// Contador de Caracteres sin Espacios
function contarCaracteres(texto) {
  return texto.replace(/\s+/g, '').length;
}

console.log(contarCaracteres("Servicio Nacional de Aprendizaje"));
