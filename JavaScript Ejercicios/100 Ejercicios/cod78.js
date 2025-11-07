// Contador de clics en botón
let contador = 0;
document.getElementById("btnContar").addEventListener("click", () => {
  contador++;
  document.getElementById("resultado").textContent = `Clics: ${contador}`;
});
