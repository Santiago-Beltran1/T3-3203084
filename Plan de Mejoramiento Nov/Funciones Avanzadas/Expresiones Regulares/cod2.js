// Flags: i (ignora mayúsculas), g (busca todas)
let SantiagoRegexFlags = /santiago/ig;

let SantiagoCadena = "El servicio de rappi es un servicio de comidas y justamente es un servicio importante.";

console.log(SantiagoCadena.match(SantiagoRegexFlags)); // Devuelve todas las coincidencias
