// Contador de Clics
let contador = 0;

function contarClic() {
  contador++;
  document.getElementById("contador").textContent = `Has hecho ${contador} clics.`;
}

// Ejemplo HTML:
// <p id="contador">Has hecho 0 clics.</p>
// <button onclick="contarClic()">Clic aquí</button>
