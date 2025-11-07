// Cambiar Estilo de un Elemento con JS
function cambiarEstilo() {
  const caja = document.getElementById("caja");
  caja.style.backgroundColor = "skyblue";
  caja.style.transform = "scale(1.2)";
  caja.style.transition = "all 0.3s ease";
}

// Ejemplo HTML:
// <div id="caja" style="width:100px;height:100px;background:gray;"></div>
// <button onclick="cambiarEstilo()">Cambiar Estilo</button>
