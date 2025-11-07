// CRUD con objetos (mejorado)
let productos = [];

function agregarProducto() {
  const nombre = document.getElementById("nombre").value;
  const precio = parseFloat(document.getElementById("precio").value);
  productos.push({ nombre, precio });
  mostrarProductos();
}

function mostrarProductos() {
  const tabla = document.getElementById("tabla");
  tabla.innerHTML = "";
  productos.forEach((p, i) => {
    tabla.innerHTML += `<tr>
      <td>${p.nombre}</td>
      <td>${p.precio}</td>
      <td><button onclick="editarProducto(${i})">Editar</button>
      <button onclick="eliminarProducto(${i})">Eliminar</button></td>
    </tr>`;
  });
}

function editarProducto(i) {
  const nuevo = prompt("Nuevo nombre:", productos[i].nombre);
  if (nuevo) productos[i].nombre = nuevo;
  mostrarProductos();
}

function eliminarProducto(i) {
  productos.splice(i, 1);
  mostrarProductos();
}
