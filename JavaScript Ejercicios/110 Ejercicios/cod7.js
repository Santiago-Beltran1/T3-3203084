// Ejercicio 7: Validación de contraseña (mínimo 8 con letra y número)
function validarPassword(pw) {
  if (typeof pw !== 'string') return false;
  const longitudOk = pw.length >= 8;
  const tieneNum = /\d/.test(pw);
  const tieneLetra = /[a-zA-Z]/.test(pw);
  return longitudOk && tieneNum && tieneLetra;
}
console.log('Ej07:', validarPassword('abc12345')); // true
console.log('Ej07:', validarPassword('short')); // false
