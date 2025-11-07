// Reproductor básico de audio
function reproducirAudio() {
  const audio = document.getElementById("miAudio");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
