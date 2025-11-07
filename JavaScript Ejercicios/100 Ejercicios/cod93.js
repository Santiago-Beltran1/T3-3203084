// Generador de nombres aleatorios
const nombres = ["Santiago", "David", "Beltran", "Pedraza", "Johan", "Kevin"];

function generarNombre() {
  const nombre = nombres[Math.floor(Math.random() * nombres.length)];
  document.getElementById("nombre").innerText = `Nombre seleccionado: ${nombre}`;
}
