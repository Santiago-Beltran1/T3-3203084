// Ej86: Contador de palabras, líneas, caracteres
function analizarTexto(text){
  const lines = text.split(/\r?\n/);
  const palabras = text.trim().split(/\s+/).filter(Boolean).length;
  const caracteres = text.length;
  return {lineas:lines.length, palabras, caracteres};
}
console.log(analizarTexto('Hola mundo\nEsto es prueba'));
