// Contador con localStorage
let contador = parseInt(localStorage.getItem("contador")) || 0;
function aumentarContador() {
  contador++;
  localStorage.setItem("contador", contador);
  document.getElementById("display").innerText = `Clics: ${contador}`;
}

// Ejemplo HTML:
// <p id="display"></p>
// <button onclick="aumentarContador()">Clic</button>
