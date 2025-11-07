// Mostrar lista de usuarios desde un array
const usuarios = [
  { nombre: "David", edad: 17 },
  { nombre: "Santiago", edad: 18 },
  { nombre: "Beltran", edad: 19 }
];

function mostrarUsuarios() {
  const contenedor = document.getElementById("usuarios");
  contenedor.innerHTML = "";
  usuarios.forEach(u => {
    const p = document.createElement("p");
    p.textContent = `${u.nombre} (${u.edad} años)`;
    contenedor.appendChild(p);
  });
}
