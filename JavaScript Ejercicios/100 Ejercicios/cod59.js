// Mostrar Fecha y Hora Actual
function mostrarFechaHora() {
  const ahora = new Date();
  document.getElementById("tiempo").innerText = ahora.toLocaleString();
}

// Ejemplo HTML:
// <p id="tiempo"></p>
// <button onclick="mostrarFechaHora()">Mostrar</button>
