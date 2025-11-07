// Reproductor Simulado de Canciones
const canciones = ["Canción A", "Canción B", "Canción C"];
let indice = 0;

function reproducir() {
  console.log("Reproduciendo:", canciones[indice]);
}

function siguiente() {
  indice = (indice + 1) % canciones.length;
  reproducir();
}

function anterior() {
  indice = (indice - 1 + canciones.length) % canciones.length;
  reproducir();
}

// Ejemplo:
reproducir();
siguiente();
