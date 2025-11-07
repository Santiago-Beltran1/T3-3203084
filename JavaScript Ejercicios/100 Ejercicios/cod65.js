// Mini Juego - Adivina el Número
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

function adivinar() {
  const intento = parseInt(document.getElementById("intento").value);
  if (intento === numeroSecreto) {
    alert("Correcto");
  } else if (intento < numeroSecreto) {
    alert("El número es mayor.");
  } else {
    alert("El número es menor.");
  }
}

// Ejemplo HTML:
// <input id="intento" type="number" placeholder="Adivina 1-10">
// <button onclick="adivinar()">Probar</button>
