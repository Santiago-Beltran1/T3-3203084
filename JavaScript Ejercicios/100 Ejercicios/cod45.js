// Tabla Dinámica de Números Pares
function generarTablaPares() {
  let html = "<table border='1'><tr><th>Número</th><th>Cuadrado</th></tr>";
  for (let i = 2; i <= 20; i += 2) {
    html += `<tr><td>${i}</td><td>${i * i}</td></tr>`;
  }
  html += "</table>";
  document.getElementById("tabla").innerHTML = html;
}

// Ejemplo HTML:
// <div id="tabla"></div>
// <button onclick="generarTablaPares()">Generar Tabla</button>
