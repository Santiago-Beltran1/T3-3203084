// Buscar un Elemento en una Lista de Objetos
const usuarios = [
  { id: 1, nombre: "Santiago" },
  { id: 2, nombre: "Beltran" },
  { id: 3, nombre: "pedraza" }
];

function buscarUsuario(nombre) {
  return usuarios.find(u => u.nombre === nombre) || "Usuario no encontrado";
}

console.log(buscarUsuario("Santiago"));
console.log(buscarUsuario("Pedro"));
