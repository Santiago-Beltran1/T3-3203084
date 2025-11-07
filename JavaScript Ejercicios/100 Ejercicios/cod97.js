// Mostrar fecha actual formateada
function mostrarFecha() {
  const fecha = new Date();
  const formato = fecha.toLocaleDateString("es-CO", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  document.getElementById("fecha").innerText = formato;
}
