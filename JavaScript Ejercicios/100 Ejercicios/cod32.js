// Promedio de Objetos en un Array
function promedioEdad(personas) {
  const total = personas.reduce((acc, p) => acc + p.edad, 0);
  return (total / personas.length).toFixed(1);
}

console.log(promedioEdad([{edad:20},{edad:25},{edad:30}]));
