// CRUD Básico de Lista de Tareas
let tareas = [];

function agregarTarea() {
  const nueva = document.getElementById("tarea").value;
  if (nueva.trim() === "") return;
  tareas.push(nueva);
  mostrarTareas();
}

function eliminarTarea(index) {
  tareas.splice(index, 1);
  mostrarTareas();
}

function mostrarTareas() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";
  tareas.forEach((t, i) => {
    lista.innerHTML += `<li>${t} <button onclick="eliminarTarea(${i})">X</button></li>`;
  });
}

// Ejemplo HTML:
// <input id="tarea"><button onclick="agregarTarea()">Agregar</button>
// <ul id="lista"></ul>
