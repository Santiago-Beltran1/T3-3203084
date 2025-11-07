// Ej83: Generador de contraseñas
function generarContrasena(len=12){
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';
  return Array.from({length:len}, ()=>chars[Math.floor(Math.random()*chars.length)]).join('');
}
console.log(generarContrasena(12));
