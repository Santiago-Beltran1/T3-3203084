// Ejercicio 39: Estimador simple de proyecto (suma y promedio de tareas)
function estimarProyecto(duraciones) {
  if (!Array.isArray(duraciones) || duraciones.length === 0) return 'Lista inválida';
  const total = duraciones.reduce((s,d)=>s + (Number(d)||0), 0);
  const promedio = +(total / duraciones.length).toFixed(2);
  return { total, promedio, tareas: duraciones.length };
}
console.log('Ej39:', estimarProyecto([2.5, 4, 1.25, 3]));
