// Ej51: Sumar dígitos de un número
function sumaDigitos(n){
  return String(Math.abs(Math.trunc(n))).split('').reduce((a,b)=>a+Number(b),0);
}
console.log(sumaDigitos(9876));
