// Programa 28: Calcular Edad a Partir de Fecha de Nacimiento
function calcularEdad(fechaNac) {
  const nacimiento = new Date(fechaNac);
  const hoy = new Date();
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  return edad;
}

console.log(calcularEdad("2000-05-14"));
