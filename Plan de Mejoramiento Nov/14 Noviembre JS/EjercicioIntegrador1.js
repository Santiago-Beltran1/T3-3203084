// Gestión  de Tareas Ejercicio
class SantiagoGestionTareas {
  constructor() {
    this.santiagoTareas = [];
  }

  santiagoAgregar(santiagoTarea) {
    this.santiagoTareas.push(santiagoTarea);
    console.log(`Tarea agregada: "${santiagoTarea}"`);
  }

  santiagoCompletar(santiagoIndice) {
    if (santiagoIndice >= 0 && santiagoIndice < this.santiagoTareas.length) {
      this.santiagoTareas[santiagoIndice] = "7 " + this.santiagoTareas[santiagoIndice];
      console.log("Tarea marcada como completada");
    } else {
      console.log("Índice inválido");
    }
  }

  santiagoObtenerEstadisticas() {
    const santiagoTotal = this.santiagoTareas.length;
    const santiagoCompletadas = this.santiagoTareas.filter(
      t => t.startsWith("7")
    ).length;
    const santiagoPendientes = santiagoTotal - santiagoCompletadas;

    return {
      total: santiagoTotal,
      completadas: santiagoCompletadas,
      pendientes: santiagoPendientes
    };
  }

  santiagoMostrar() {
    console.log("\n=== LISTA DE TAREAS ===");
    this.santiagoTareas.forEach((t, i) => {
      console.log(`${i}. ${t}`);
    });
  }
}
