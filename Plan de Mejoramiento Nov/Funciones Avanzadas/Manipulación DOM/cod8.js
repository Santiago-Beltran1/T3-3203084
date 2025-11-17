// Evento input y change
let SantiagoInput = document.querySelector("#SantiagoInput");

SantiagoInput.addEventListener("input", (SantiagoEvento) => {
  console.log("Valor actual:", SantiagoEvento.target.value);
});
