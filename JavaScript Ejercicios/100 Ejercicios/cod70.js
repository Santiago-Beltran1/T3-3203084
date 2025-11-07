// Lista interactiva con animación CSS
function agregarElemento() {
  const texto = document.getElementById("nuevo").value;
  const lista = document.getElementById("lista");
  const li = document.createElement("li");
  li.textContent = texto;
  li.classList.add("fade");
  lista.appendChild(li);
}

// Ejemplo HTML/CSS:
// <input id="nuevo"><button onclick="agregarElemento()">Agregar</button>
// <ul id="lista"></ul>
// CSS:
// .fade { animation: aparecer 0.5s; }
// @keyframes aparecer { from {opacity:0;} to {opacity:1;} }
