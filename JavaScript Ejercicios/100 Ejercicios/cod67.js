// Simulación de Base de Datos con Array CRUD
let usuariosDB = [];

function crearUsuario(nombre) {
  usuariosDB.push({ id: usuariosDB.length + 1, nombre });
  listarUsuarios();
}

function eliminarUsuario(id) {
  usuariosDB = usuariosDB.filter(u => u.id !== id);
  listarUsuarios();
}

function listarUsuarios() {
  const cont = document.getElementById("usuarios");
  cont.innerHTML = "";
  usuariosDB.forEach(u => {
    cont.innerHTML += `<li>${u.nombre} <button onclick="eliminarUsuario(${u.id})">X</button></li>`;
  });
}

// Ejemplo HTML:
// <input id="nombre">
// <button onclick="crearUsuario(document.getElementById('nombre').value)">Agregar</button>
// <ul id="usuarios"></ul>
