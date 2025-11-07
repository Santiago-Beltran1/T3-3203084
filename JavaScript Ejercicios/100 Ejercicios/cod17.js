// Programa 17: CRUD de Usuarios con Métodos Array
let usuarios = [];

function crearUsuario(nombre, edad) {
  usuarios.push({ id: usuarios.length + 1, nombre, edad });
}

function leerUsuarios() {
  return usuarios;
}

function actualizarUsuario(id, nuevoNombre) {
  const u = usuarios.find(x => x.id === id);
  if (u) u.nombre = nuevoNombre;
}

function eliminarUsuario(id) {
  usuarios = usuarios.filter(u => u.id !== id);
}

crearUsuario("David", 17);
crearUsuario("Santiago", 19);
actualizarUsuario(2, "SantiagoBel");
eliminarUsuario(1);
console.log(leerUsuarios());
