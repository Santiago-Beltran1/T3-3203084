// Reemplazar un elemento por otro
let SantiagoOriginal = document.querySelector("#SantiagoOriginal");
let SantiagoNuevo = document.createElement("h3");

SantiagoNuevo.textContent = "Elemento reemplazado";

SantiagoOriginal.replaceWith(SantiagoNuevo);
