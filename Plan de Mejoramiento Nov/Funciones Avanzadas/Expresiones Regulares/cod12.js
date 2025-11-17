// Capturar partes específicas del texto
let SantiagoRegexGrupos = /(\d{2})-(\d{2})-(\d{4})/;

let SantiagoFecha = "Fecha: 25-12-2024";

let SantiagoCapturas = SantiagoFecha.match(SantiagoRegexGrupos);

console.log(SantiagoCapturas); // índice 1 = día, 2 = mes, 3 = año
