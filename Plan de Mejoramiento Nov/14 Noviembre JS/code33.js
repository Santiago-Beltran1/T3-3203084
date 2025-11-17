// ejercicio33 
// CRUD -> Actualizar
import fs from 'fs';
function SantiagoActu(SantiagoNew) {
 fs.writeFile('log.txt', SantiagoNew, (err) => {
 if (err) {
 console.error("Error:", err);
 return;
 }
 console.log("Archivo actualizado (UPDATE)");
 });
}
const SantiagoContAct =
 "Se Actualiza con este mensaje lo que hay en el archivo .txt (Santiago Beltran)" +
 new Date().toLocaleString() + "\n";
SantiagoActu(SantiagoContAct);