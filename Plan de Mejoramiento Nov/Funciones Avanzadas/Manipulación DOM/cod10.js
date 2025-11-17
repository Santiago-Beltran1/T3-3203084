// Delegación de eventos en lista
let SantiagoLista = document.querySelector("#SantiagoLista");

SantiagoLista.addEventListener("click", (SantiagoEvento) => {
  if (SantiagoEvento.target.tagName === "LI") {
    console.log("Item clickeado:", SantiagoEvento.target.textContent);
  }
});
