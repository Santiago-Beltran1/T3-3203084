// Manejo de atributos HTML
let SantiagoImagen = document.querySelector("#SantiagoImg");

SantiagoImagen.setAttribute("src", "imagen.jpg");
SantiagoImagen.setAttribute("alt", "Descripción de imagen");

console.log(SantiagoImagen.getAttribute("src"));
