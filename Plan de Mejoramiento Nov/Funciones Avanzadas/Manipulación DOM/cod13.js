// Clonar un nodo completo
let SantiagoNodo = document.querySelector("#SantiagoNodo");
let SantiagoClon = SantiagoNodo.cloneNode(true); // true = clona hijos

document.body.appendChild(SantiagoClon);
