// Resaltador de texto dinámico
function resaltarPalabra() {
  const texto = document.getElementById("texto").value;
  const palabra = document.getElementById("buscar").value;
  const resultado = texto.replaceAll(
    palabra, 
    `<span style='background:yellow;font-weight:bold'>${palabra}</span>`
  );
  document.getElementById("resultado").innerHTML = resultado;
}

// Ejemplo HTML:
// <textarea id="texto"></textarea>
// <input id="buscar" placeholder="Palabra a resaltar">
// <button onclick="resaltarPalabra()">Resaltar</button>
// <p id="resultado"></p>
