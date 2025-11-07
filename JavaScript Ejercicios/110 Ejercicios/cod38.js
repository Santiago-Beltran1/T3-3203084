// Ejercicio 38: Convertidor tiempo (minutos -> horas/días y viceversa)
function minutosAHorasDias(minutos) {
  if (!Number.isFinite(minutos) || minutos < 0) return 'Minutos inválidos';
  const dias = Math.floor(minutos / 1440);
  const horas = Math.floor((minutos % 1440) / 60);
  const mins = minutos % 60;
  return `${dias}d ${horas}h ${mins}m`;
}
function horasADiasMin(horas) { return minutosAHorasDias(horas * 60); }
console.log('Ej38:', minutosAHorasDias(1500), horasADiasMin(36));
