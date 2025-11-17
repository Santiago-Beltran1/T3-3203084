// Evento submit en formulario
let SantiagoFormulario = document.querySelector("#SantiagoForm");

SantiagoFormulario.addEventListener("submit", (SantiagoEvento) => {
  SantiagoEvento.preventDefault(); // Evita recargar página
  console.log("Formulario enviado");
});
