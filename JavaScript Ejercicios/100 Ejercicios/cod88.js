// Contador con botones + y -
let valor = 0;
function aumentar() {
  valor++;
  document.getElementById("contador").innerText = valor;
}
function disminuir() {
  valor--;
  document.getElementById("contador").innerText = valor;
}
