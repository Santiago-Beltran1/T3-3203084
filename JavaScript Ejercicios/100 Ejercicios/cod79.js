// Validación de formulario simple
function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();

  if (nombre === "" || correo === "") {
    alert("Por favor complete todos los campos.");
    return false;
  }
  alert("Formulario enviado correctamente.");
  return true;
}
