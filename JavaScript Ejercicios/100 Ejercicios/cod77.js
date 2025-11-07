// Contador de palabras y caracteres
function contarTexto() {
  const texto = document.getElementById("texto").value.trim();
  const palabras = texto === "" ? 0 : texto.split(/\s+/).length;
  const caracteres = texto.length;
  document.getElementById("info").innerText = `Palabras: ${palabras} | Caracteres: ${caracteres}`;
}

// Ejemplo HTML:
// <textarea id="texto" oninput="contarTexto()"></textarea>
// <p id="info"></p>
