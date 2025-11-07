// Validar un Correo Electrónico
function validarCorreo(correo) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}

console.log(validarCorreo("usuario@correo.com"));
console.log(validarCorreo("correo@incorrecto"));
