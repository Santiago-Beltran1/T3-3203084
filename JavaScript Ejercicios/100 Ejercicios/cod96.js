// Validación avanzada de correo electrónico
function validarCorreo() {
  const correo = document.getElementById("correo").value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(correo)) {
    alert("Correo válido");
  } else {
    alert("Correo inválido");
  }
}
