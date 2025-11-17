//Suma de Dos Números con Conversión - Versión mejorada con validación
let Santiago1 = prompt("Ingrese primer valor: ");
let Santiago2 = prompt("Ingrese segundo valor: ");

// Conversión con base decimal
let Beltran1 = parseInt(Santiago1, 10);
let Beltran2 = parseInt(Santiago2, 10);

// Verificar conversión exitosa que los valores sean números isNan verifica si es un número
if (isNaN(Beltran1) || isNaN(Beltran2)) {
alert("Por favor ingrese números válidos ");
} else {
let resultado = Beltran1 + Beltran2;
alert(`El resultado de ${Beltran1} + ${Beltran2} = ${resultado}`);
}