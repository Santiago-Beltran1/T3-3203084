// Insertar elementos antes o después
let SantiagoReferencia = document.querySelector("#SantiagoReferencia");

let SantiagoAntes = document.createElement("div");
SantiagoAntes.textContent = "Elemento antes";

let SantiagoDespues = document.createElement("div");
SantiagoDespues.textContent = "Elemento después";

SantiagoReferencia.before(SantiagoAntes);
SantiagoReferencia.after(SantiagoDespues);
