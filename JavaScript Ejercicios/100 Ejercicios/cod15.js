// Ordenar un Array de Objetos por Propiedad
const estudiantes = [
  { nombre: "David", nota: 4.5 },
  { nombre: "Santiago", nota: 3.8 },
  { nombre: "Beltran", nota: 5.0 },
  { nombre: "Pedraza", nota: 4.2 }
];

estudiantes.sort((a, b) => b.nota - a.nota);
console.log(estudiantes);
