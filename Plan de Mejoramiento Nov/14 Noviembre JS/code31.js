// ejercicio31
// CRUD -> Agregar al archivo .txt
import fs from 'fs';
const SantiagoNew =
 "--- Nueva dato agregado sin errores en este archivo (Santiago Beltran)\n";
fs.appendFile('log.txt', SantiagoNew, (err) => {
 if (err) {
 console.error("Error:", err);
 return;
 }
 console.log("Dato agregado (APPEND)");
});

//fs.writeFile(): Crea o SOBRESCRIBE completamente el archivo es decir incluso si el archivo donde tiene que ir la info no existe lo crea en uno nuevo
//fs.appendFile(): Agrega contenido al FINAL sin borrar lo existente