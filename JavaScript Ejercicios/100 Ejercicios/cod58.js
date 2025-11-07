// Validar Longitud de Contraseña
function validarContrasena() {
  const input = document.getElementById("password").value;
  if (input.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres.");
  } else {
    alert("Contraseña válida.");
  }
}

// Ejemplo HTML:
// <input id="password" type="password">
// <button onclick="validarContrasena()">Validar</button>
