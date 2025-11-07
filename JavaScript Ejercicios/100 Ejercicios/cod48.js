// Cambio de Color Aleatorio de Fondo
function cambiarColor() {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.body.style.backgroundColor = color;
}

// Ejemplo HTML:
// <button onclick="cambiarColor()">Cambiar Color</button>
