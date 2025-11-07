// Ejercicio 4: Calculadora de edad 
function calcularEdad(yearNacimiento, referencia = (new Date()).getFullYear()) {
  const edad = referencia - yearNacimiento;
  if (!Number.isInteger(edad) || edad < 0) return 'Año inválido';
  return edad;
}
console.log('Ej04:', calcularEdad(2007)); 
