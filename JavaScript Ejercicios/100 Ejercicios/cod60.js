// Calculadora con switch
function calcular() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const op = document.getElementById("operacion").value;
  let resultado;

  switch (op) {
    case '+': resultado = num1 + num2; break;
    case '-': resultado = num1 - num2; break;
    case '*': resultado = num1 * num2; break;
    case '/': resultado = num2 !== 0 ? num1 / num2 : "Error: división por 0"; break;
    default: resultado = "Operación inválida";
  }

  document.getElementById("res").innerText = `Resultado: ${resultado}`;
}

// Ejemplo HTML:
// <input id="num1"> <input id="num2">
// <select id="operacion">
//   <option value="+">+</option>
//   <option value="-">-</option>
//   <option value="*">*</option>
//   <option value="/">/</option>
// </select>
// <button onclick="calcular()">Calcular</button>
// <p id="res"></p>
