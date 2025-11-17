// Método: splice()
// Permite añadir, eliminar o reemplazar elementos.
let SantiagoSemana = ["Lun", "Mar", "Mié", "Jue"];

// Insertar "Dom" en posición 1
SantiagoSemana.splice(1, 0, "Dom");

// Eliminar 1 elemento desde posición 3
SantiagoSemana.splice(3, 1);

console.log(SantiagoSemana);
