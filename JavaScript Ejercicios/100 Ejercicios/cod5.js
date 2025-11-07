// Contar Vocales y Consonantes
function contarLetras(texto) {
  const vocales = 'aeiouáéíóú';
  let contV = 0, contC = 0;
  texto = texto.toLowerCase();

  for (let letra of texto) {
    if (/[a-záéíóúñ]/.test(letra)) {
      if (vocales.includes(letra)) contV++;
      else contC++;
    }
  }
  return { vocales: contV, consonantes: contC };
}

console.log(contarLetras("Santiago Beltran"));
