// ejercicio34
// CRUD -> Eliminar
import fs from 'fs';
const SantiagoArc = "archivoQueSeVaAEliminar.txt";
if (fs.existsSync(SantiagoArc)) {
 try {
 fs.unlinkSync(SantiagoArc);
 console.log(`Archivo '${SantiagoArc}' eliminado exitosamente`);
 } catch (err) {
 console.error("Error al eliminar:", err);
 }
} else {
 console.log(`El archivo '${SantiagoArc}' no existe`);
}

// En este caso fs.existsSync para verificar si el .txt existe. 
// Si existe, fs.unlinkSync() se usa para eliminarlo y también se puede mostrar un mensaje de que todo sale bien