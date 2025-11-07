// CRUD Básico con localStorage
function guardarDato() {
  const clave = document.getElementById("clave").value;
  const valor = document.getElementById("valor").value;
  localStorage.setItem(clave, valor);
  mostrarDatos();
}

function eliminarDato(clave) {
  localStorage.removeItem(clave);
  mostrarDatos();
}

function mostrarDatos() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    lista.innerHTML += `<li>${key}: ${value} <button onclick="eliminarDato('${key}')">X</button></li>`;
  }
}

// Ejemplo HTML:
// <input id="clave" placeholder="Clave">
// <input id="valor" placeholder="Valor">
// <button onclick="guardarDato()">Guardar</button>
// <ul id="lista"></ul>
