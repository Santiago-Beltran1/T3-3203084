const fs = require('fs');
const archivo = "dato.txt";
const nuevoContenido = "Este es el contenido editado del archivo";

fs.access(archivo, fs.constants.F_OK, (err) => {
    if (err) {
        console.log("El archivo no existe. No se puede editar.");
    } else {
        fs.writeFile(archivo, nuevoContenido, (err) => {
            if (err) throw err;
            console.log("Archivo editado correctamente");
        });
    }
});
