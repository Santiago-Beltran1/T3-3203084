const fs = require('fs');
const archivo = "dato.txt"

fs.writeFile(archivo, "Este es mi primer commit", (err)=> err ? console.error(err): console.log("Archivo Guardado")); 
 