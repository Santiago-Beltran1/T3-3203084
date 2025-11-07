// Guardar Datos en JSON desde Formulario
function guardarUsuario() {
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;

  const usuario = { nombre, edad };
  console.log(JSON.stringify(usuario));
}

// Ejemplo HTML:
// <input id="nombre" placeholder="Nombre">
// <input id="edad" placeholder="Edad">
// <button onclick="guardarUsuario()">Guardar</button>
