// Ejercicio 18: Interés simple: I = C * r * t
function interesSimple(capital, tasaAnual, tiempoAnios) {
  const interes = capital * (tasaAnual/100) * tiempoAnios;
  return { interes: +interes.toFixed(2), total: +(capital + interes).toFixed(2) };
}
console.log('Ej18:', interesSimple(1000, 5, 2)); // interés 100
