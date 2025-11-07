// Ejercicio 6: IMC 
function imc(pesoKg, alturaM) {
  if (pesoKg <= 0 || alturaM <= 0) return 'Valores inválidos';
  const valor = pesoKg / (alturaM ** 2);
  const categoria = valor < 18.5 ? 'Bajo peso' :
                    valor < 25 ? 'Normal' :
                    valor < 30 ? 'Sobrepeso' : 'Obesidad';
  return { imc: Number(valor.toFixed(2)), categoria };
}
console.log('Ej06:', imc(60, 1.71));
