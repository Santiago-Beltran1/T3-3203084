// Mini encuestador con porcentaje de votos
let votos = { opcionA: 0, opcionB: 0 };

function votar(opcion) {
  votos[opcion]++;
  const total = votos.opcionA + votos.opcionB;
  document.getElementById("resultado").innerText =
    `A: ${(votos.opcionA / total * 100).toFixed(1)}% | B: ${(votos.opcionB / total * 100).toFixed(1)}%`;
}
