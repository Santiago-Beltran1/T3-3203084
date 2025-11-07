// Mostrar número aleatorio
function generarNumero() {
  const num = Math.floor(Math.random() * 100) + 1;
  document.getElementById("resultado").innerText = `Número aleatorio: ${num}`;
}
