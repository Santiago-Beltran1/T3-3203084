// Ej74: Filtrar objetos por valor de propiedad
function filtrarPor(arr, campo, valor){ return arr.filter(o=>o[campo]===valor); }
console.log(filtrarPor([{n:'A',g:1},{n:'B',g:2}],'g',2));
