// Temporizador Simple
let tiempo = 0;
let intervalo;

function iniciarTemporizador() {
  intervalo = setInterval(() => {
    tiempo++;
    document.getElementById("tiempo").innerText = `${tiempo} segundos`;
  }, 1000);
}

function detenerTemporizador() {
  clearInterval(intervalo);
}

// Ejemplo HTML:
// <p id="tiempo">0 segundos</p>
// <button onclick="iniciarTemporizador()">Iniciar</button>
// <button onclick="detenerTemporizador()">Detener</button>
