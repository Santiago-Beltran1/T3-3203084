// Galería de imágenes navegable
const fotos = ["img1.jpg", "img2.jpg", "img3.jpg"];
let indice = 0;

function mostrarImagen(n) {
  indice = (indice + n + fotos.length) % fotos.length;
  document.getElementById("foto").src = fotos[indice];
}

// Ejemplo HTML:
// <img id="foto" src="img1.jpg" width="200">
// <button onclick="mostrarImagen(-1)">Anterior</button>
// <button onclick="mostrarImagen(1)">Siguiente</button>
