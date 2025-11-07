// Convertir JSON a Objeto
const jsonData = '{"nombre":"David","edad":17,"ciudad":"Bogotá"}';
const objeto = JSON.parse(jsonData);
console.log(objeto.nombre); // Salida: David
