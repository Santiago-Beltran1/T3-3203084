// Métodos: indexOf(), lastIndexOf(), includes()
let SantiagoFraseBusqueda = "uno dos uno tres cuatro uno uno ocho";

let SantiagoPrimero = SantiagoFraseBusqueda.indexOf("dos");      // Primera aparición
let SantiagoUltimo = SantiagoFraseBusqueda.lastIndexOf("ocho");   // Última aparición
let SantiagoIncluye = SantiagoFraseBusqueda.includes("uno");        // Resultado booleano

console.log(SantiagoPrimero, SantiagoUltimo, SantiagoIncluye);
