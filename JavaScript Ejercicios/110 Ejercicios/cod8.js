// Ejercicio 8: Calculadora de propina (opciones 10/15/20 o personalizada)
function calcularPropina(total, tipo='15') {
  const porcentajes = { '10':0.10, '15':0.15, '20':0.20 };
  const p = porcentajes[tipo] ?? parseFloat(tipo) ?? 0.15;
  return { propina: +(total * p).toFixed(2), totalConPropina: +(total * (1 + p)).toFixed(2) };
}
console.log('Ej08:', calcularPropina(80, '20'));
