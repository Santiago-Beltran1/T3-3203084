// Buscador en una Lista
const elementos = ["aguacate", "tamal", "salchipapa", "papa", "naranja"];

function buscarElemento() {
  const busqueda = document.getElementById("busqueda").value.toLowerCase();
  const resultados = elementos.filter(e => e.includes(busqueda));
  document.getElementById("resultados").innerText = resultados.join(", ") || "Sin resultados.";
}

// Ejemplo HTML:
// <input id="busqueda" placeholder="Buscar fruta...">
// <button onclick="buscarElemento()">Buscar</button>
// <p id="resultados"></p>
