// Validar Formulario de Registro
function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();

  if (nombre === "" || email === "") {
    alert("Por favor, completa todos los campos.");
    return false;
  }

  if (!email.includes("@")) {
    alert("Correo electrónico no válido.");
    return false;
  }

  alert("Formulario enviado correctamente.");
  return true;
}

// Ejemplo HTML:
// <input id="nombre" placeholder="Nombre">
// <input id="email" placeholder="Correo">
// <button onclick="validarFormulario()">Enviar</button>
