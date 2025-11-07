// Cambiar color al pasar el mouse
function cambiarColor(elemento) {
  elemento.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Ejemplo HTML:
// <div onmouseover="cambiarColor(this)" style="width:100px;height:100px;background:gray;"></div>
