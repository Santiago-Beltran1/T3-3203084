// Convertir Temperaturas (Celsius ↔ Fahrenheit)
function convertirTemperatura(valor, tipo) {
  if (tipo === "C") return (valor * 9/5) + 32;
  if (tipo === "F") return (valor - 32) * 5/9;
  return "Tipo no válido";
}

console.log(convertirTemperatura(0, "C"));
console.log(convertirTemperatura(32, "F"));
