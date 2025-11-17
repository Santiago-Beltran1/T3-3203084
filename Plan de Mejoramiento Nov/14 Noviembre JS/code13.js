// Suma de Elementos con Bucle

// Definimos una función que recibe un arreglo (arr)
function SantiagoSarr(arr) {
    
    // Inicializamos una variable suma en 0 para acumular los valores
    let SantiagoSum = 0;

    // Recorremos el arreglo desde el índice 0 hasta el último
    for (let i = 0; i < arr.length; i++) {

        // En cada vuelta del bucle sumamos el valor del arreglo a 'suma'
        SantiagoSum += arr[i];
    }

    // Al finalizar el bucle devolvemos la suma total
    return SantiagoSum;
}

// Creamos un arreglo llamado ventas con números enteros
let SantiagoVents = [1, 2, 3, 4, 5];

console.log("Total: ", SantiagoSarr(SantiagoVents));
