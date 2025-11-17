// Uso del sistema de la gestión de tareas que se muestra en el primer archivo

// Crear instancia
const santiagoMisTareas = new SantiagoGestionTareas();

// Agregar nuevas tareas
santiagoMisTareas.santiagoAgregar("Hacer aseo de la casa");
santiagoMisTareas.santiagoAgregar("Comprar Craft para inglés");
santiagoMisTareas.santiagoAgregar("Enviar la tarea");

// Mostrar todas las tareas
santiagoMisTareas.santiagoMostrar();

// Completar la segunda tarea
santiagoMisTareas.santiagoCompletar(1);

// Mostrar tareas actualizadas
santiagoMisTareas.santiagoMostrar();

// Mostrar estadísticas
const santiagoStats = santiagoMisTareas.santiagoObtenerEstadisticas();
console.log("\n=== ESTADÍSTICAS ===");
console.log(`Total: ${santiagoStats.total}`);
console.log(`Completadas: ${santiagoStats.completadas}`);
console.log(`Pendientes: ${santiagoStats.pendientes}`);
