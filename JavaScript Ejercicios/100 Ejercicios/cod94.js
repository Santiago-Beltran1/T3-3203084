// Temporizador con botón de inicio y pausa
let segundos = 0;
let intervalo;

function iniciarTemporizador() {
  intervalo = setInterval(() => {
    segundos++;
    document.getElementById("tiempo").innerText = `${segundos}s`;
  }, 1000);
}

function pausarTemporizador() {
  clearInterval(intervalo);
}
