// Ej108: Descuento por edad (niño <12 , adulto 12-64, mayor >=65)
const descuentoPorEdad = edad => edad<12 ? 0.5 : (edad>=65 ? 0.4 : 0);
console.log(descuentoPorEdad(10), descuentoPorEdad(70), descuentoPorEdad(30));
