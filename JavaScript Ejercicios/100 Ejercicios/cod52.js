// Animación de Movimiento
let posicion = 0;
function moverElemento() {
  const box = document.getElementById("box");
  posicion += 10;
  box.style.transform = `translateX(${posicion}px)`;
}

// Ejemplo HTML:
// <div id="box" style="width:50px;height:50px;background:red;position:relative;"></div>
// <button onclick="moverElemento()">Mover</button>
