// ejercicio 32
// CRUD -> Leer
import fs from 'fs';
fs.readFile('log.txt', 'utf8', (err, data) => {
 if (err) {
 console.error("Error al leer:", err);
 return;
 }

 console.log("=== Contenido de log.txt ===");
 console.log(data);
 console.log("============================");
});

// err: Contiene error si algo falló
// data: Contenido del archivo como string además de que se usa el formato utf8 para que lea carácteres especiales