// Mostrar Imagen Aleatoria
const imagenes = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

function mostrarImagen() {
  const random = Math.floor(Math.random() * imagenes.length);
  document.getElementById("imagen").src = imagenes[random];
}

// Ejemplo HTML:
// <img id="imagen" src="1.jpg" width="150">
// <button onclick="mostrarImagen()">Cambiar Imagen</button>
