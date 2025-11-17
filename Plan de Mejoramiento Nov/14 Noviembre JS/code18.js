//Modificación de elementos con .splice()

let SantiagoT = [
"Hacer Aseo",
"Hacer Almuerzo",
"Estudiar",
"Ir al GYM"
];

console.log("Iniciales:", SantiagoT);

// se crea nuevo array del original con .splice(índice, cantidad_eliminar, nuevo_elemento)
SantiagoT.splice(1, 1, "Ver TV");

console.log("Finales:", SantiagoT);
// ["Hacer cama", "Pasear al perro",
// "Estudiar JS", "Lavar platos"]