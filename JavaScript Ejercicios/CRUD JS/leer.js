const fs = require('fs');
const archivo = "dato.txt"

fs.readFile(archivo, 'utf8', (err, data)=> {
    if (err) throw err;
    console.log(data);
});
 