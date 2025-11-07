// Calculadora de edad
function calcularEdad() {
  const nacimiento = new Date(document.getElementById("fecha").value);
  const hoy = new Date();
  const edad = hoy.getFullYear() - nacimiento.getFullYear();
  document.getElementById("resultado").innerText = `Tienes ${edad} años`;
}
