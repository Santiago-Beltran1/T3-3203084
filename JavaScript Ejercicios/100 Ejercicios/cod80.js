// Lista dinámica de tareas
function agregarTarea() {
  const tarea = document.getElementById("tarea").value;
  if (tarea === "") return;

  const li = document.createElement("li");
  li.textContent = tarea;
  document.getElementById("lista").appendChild(li);
  document.getElementById("tarea").value = "";
}
