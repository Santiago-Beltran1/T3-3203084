// Ejercicio 28: Sistema de salarios (horas normales y extras)
function calcularSalario(horasTrabajadas, tarifaHora) {
  if (horasTrabajadas < 0 || tarifaHora < 0) return 'Valores inválidos';
  const horasNormales = Math.min(40, horasTrabajadas);
  const horasExtra = Math.max(0, horasTrabajadas - 40);
  const pagoNormal = horasNormales * tarifaHora;
  const pagoExtra = horasExtra * tarifaHora * 1.5; // 50% extra
  const total = +(pagoNormal + pagoExtra).toFixed(2);
  return { horasNormales, horasExtra, pagoNormal: +pagoNormal.toFixed(2), pagoExtra: +pagoExtra.toFixed(2), total };
}
console.log('Ej28:', calcularSalario(45, 20000));
