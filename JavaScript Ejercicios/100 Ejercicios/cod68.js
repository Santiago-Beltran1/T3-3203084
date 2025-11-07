// Temporizador con cuenta regresiva
function iniciarCuentaRegresiva(segundos) {
  const display = document.getElementById("cuenta");
  const intervalo = setInterval(() => {
    display.textContent = `${segundos} segundos restantes`;
    segundos--;
    if (segundos < 0) {
      clearInterval(intervalo);
      display.textContent = "¡Tiempo terminado!";
    }
  }, 1000);
}

// Ejemplo HTML:
// <p id="cuenta"></p>
// <button onclick="iniciarCuentaRegresiva(10)">Iniciar</button>
