// Registro de Estudiantes Ejercicio
const fs = require("fs");

class SantiagoEstudiante {
  constructor(santiagoNombre, santiagoNotas = []) {
    this.santiagoNombre = santiagoNombre;
    this.santiagoNotas = santiagoNotas;
  }

  santiagoObtenerPromedio() {
    if (this.santiagoNotas.length === 0) return 0;

    const santiagoSuma = this.santiagoNotas.reduce((acc, n) => acc + n, 0);
    return santiagoSuma / this.santiagoNotas.length;
  }
}

class SantiagoRegistroEstudiantes {
  constructor(santiagoArchivo = "santiagoEstudiantes.json") {
    this.santiagoArchivo = santiagoArchivo;
    this.santiagoListaEstudiantes = [];

    this.santiagoCargarDesdeArchivo();
  }

  santiagoAgregarEstudiante(santiagoEstudiante) {
    this.santiagoListaEstudiantes.push(santiagoEstudiante);
    console.log(`Estudiante agregado: ${santiagoEstudiante.santiagoNombre}`);
    this.santiagoGuardarEnArchivo();
  }

  santiagoGuardarEnArchivo() {
    const santiagoDatos = JSON.stringify(this.santiagoListaEstudiantes, null, 2);

    fs.writeFileSync(this.santiagoArchivo, santiagoDatos);
    console.log("Datos guardados en archivo.");
  }

  santiagoCargarDesdeArchivo() {
    if (fs.existsSync(this.santiagoArchivo)) {
      const santiagoContenido = fs.readFileSync(this.santiagoArchivo, "utf-8");
      const santiagoDatosJSON = JSON.parse(santiagoContenido);

      // Reconstruir objetos SantiagoEstudiante
      this.santiagoListaEstudiantes = santiagoDatosJSON.map(
        data => new SantiagoEstudiante(data.santiagoNombre, data.santiagoNotas)
      );

      console.log("Datos cargados desde archivo.");
    } else {
      console.log("Archivo no encontrado, iniciando registro vacío.");
      this.santiagoListaEstudiantes = [];
    }
  }

  santiagoMostrarEstudiantes() {
    console.log("\n=== LISTA DE ESTUDIANTES ===");

    this.santiagoListaEstudiantes.forEach((e, i) => {
      console.log(
        `${i}. ${e.santiagoNombre} - Notas: [${e.santiagoNotas.join(", ")}] - Promedio: ${e.santiagoObtenerPromedio().toFixed(2)}`
      );
    });
  }

  santiagoCalcularPromedioGeneral() {
    if (this.santiagoListaEstudiantes.length === 0) return 0;

    const santiagoPromedios = this.santiagoListaEstudiantes.map(
      e => e.santiagoObtenerPromedio()
    );

    const santiagoSuma = santiagoPromedios.reduce((acc, p) => acc + p, 0);

    return santiagoSuma / santiagoPromedios.length;
  }
}

module.exports = { SantiagoEstudiante, SantiagoRegistroEstudiantes };
