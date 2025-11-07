// Generador de Contraseñas Aleatorias
function generarContrasena(longitud = 8) {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%!";
  let contrasena = "";
  for (let i = 0; i < longitud; i++) {
    contrasena += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return contrasena;
}

// Ejemplo:
console.log("Contraseña generada:", generarContrasena(12));
