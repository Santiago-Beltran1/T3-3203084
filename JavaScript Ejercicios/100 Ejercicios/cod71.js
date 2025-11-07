// Contador con incremento automático
let contador = 0;
function iniciarContador() {
  setInterval(() => {
    contador++;
    document.getElementById("display").innerText = contador;
  }, 1000);
}

// Ejemplo HTML:
// <h2 id="display">0</h2>
// <button onclick="iniciarContador()">Iniciar</button>
