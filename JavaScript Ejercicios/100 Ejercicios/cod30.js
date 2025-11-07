// Filtrar Nombres que Empiezan con una Letra
function filtrarPorLetra(nombres, letra) {
  return nombres.filter(n => n[0].toLowerCase() === letra.toLowerCase());
}

console.log(filtrarPorLetra(["Ana", "Andrés", "Sofía", "Samuel"], "A"));
