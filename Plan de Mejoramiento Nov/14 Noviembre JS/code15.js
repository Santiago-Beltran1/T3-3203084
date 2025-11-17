// Matrices


//Una matriz es un array que contiene más arrays y a los cuales se acceden con índices
let SantiagoM = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];

//El primer indice (i) selecciona la fila y el segundo (j) la columna
function SantiagoImp(arr) {
for (let Santiagoi = 0; Santiagoi < arr.length; Santiagoi++) {
for (let Santiagoj = 0; Santiagoj < arr[Santiagoi].length; Santiagoj++) {
console.log(`[${Santiagoi}][${Santiagoj}] = ${arr[Santiagoi][Santiagoj]}`);
}
}
}


//En el ejemplo con un contador se van sumando y va mostrando el resultado que hay en la posición que hay de cada matriz
//Si es [1][2] pues el resultado que hay y que nos mostrara será 6
SantiagoImp(SantiagoM);