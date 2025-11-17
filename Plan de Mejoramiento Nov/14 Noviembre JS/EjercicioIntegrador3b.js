// Uso del sistema de Registro de Estudiantes
const { SantiagoEstudiante, SantiagoRegistroEstudiantes } = require("./santiagoRegistroEstudiantes");

// Crear registro (carga datos si ya existe el JSON)
const santiagoRegistro = new SantiagoRegistroEstudiantes();

// Crear nuevos estudiantes
const santiagoEst1 = new SantiagoEstudiante("Santiago Beltran", [5, 3.3, 4]);
const santiagoEst2 = new SantiagoEstudiante("David Pedraza", [4, 2.5, 4]);
const santiagoEst3 = new SantiagoEstudiante("Santiago Pedraza", [1, 2, 3]);

// Agregar estudiantes al registro
santiagoRegistro.santiagoAgregarEstudiante(santiagoEst1);
santiagoRegistro.santiagoAgregarEstudiante(santiagoEst2);
santiagoRegistro.santiagoAgregarEstudiante(santiagoEst3);

// Mostrar estudiantes
santiagoRegistro.santiagoMostrarEstudiantes();

// Promedio general
const santiagoPromedioGeneral = santiagoRegistro.santiagoCalcularPromedioGeneral();
console.log(`\nPromedio general del curso: ${santiagoPromedioGeneral.toFixed(2)}`);
