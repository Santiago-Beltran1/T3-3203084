const fs = require('fs');
const archivo = "dato.txt"

fs.unlink(archivo,(err)=> {
    if (err) throw err;
    console.log("Archivo Borrado")
})
 