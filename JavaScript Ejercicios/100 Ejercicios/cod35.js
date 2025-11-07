// CRUD Simulado de Libros
let libros = [];

function agregarLibro(titulo, autor) {
  libros.push({ id: libros.length + 1, titulo, autor });
}

function listarLibros() {
  return libros;
}

function actualizarLibro(id, nuevoTitulo) {
  const libro = libros.find(l => l.id === id);
  if (libro) libro.titulo = nuevoTitulo;
}

function eliminarLibro(id) {
  libros = libros.filter(l => l.id !== id);
}

agregarLibro("1984", "Orwell");
agregarLibro("El Principito", "Saint-Exupéry");
actualizarLibro(1, "1984 (Edición Revisada)");
eliminarLibro(2);
console.log(listarLibros());
