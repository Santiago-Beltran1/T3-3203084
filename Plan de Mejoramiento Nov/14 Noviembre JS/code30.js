// ejercicio 30 
// CRUD -> CREAR

import fs from 'fs';
const SantiagoFecha = new Date().toISOString();
const SantiagoCont = `Log creado: ${SantiagoFecha}\n`;
fs.writeFile('log.txt', SantiagoCont, (err) => {
 if (err) {
 console.error("Error:", err);
 return;
 }
 console.log("Archivo creado exitosamente (CREATE)");
});
