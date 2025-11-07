// CRUD básico de usuarios
let usuarios = [];

function crearUsuario(nombre) {
  usuarios.push(nombre);
}

function leerUsuarios() {
  return usuarios;
}

function actualizarUsuario(indice, nuevoNombre) {
  if (usuarios[indice]) usuarios[indice] = nuevoNombre;
}

function eliminarUsuario(indice) {
  usuarios.splice(indice, 1);
}

// Ejemplo de uso
crearUsuario("Santiago");
crearUsuario("Beltran");
actualizarUsuario(0, "David");
eliminarUsuario(1);
console.log(leerUsuarios());
