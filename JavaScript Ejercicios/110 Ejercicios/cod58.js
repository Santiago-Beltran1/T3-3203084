// Ej58: Sumar pares e impares hasta N
function sumaParesImpares(n){
  let p=0,i=0;
  for(let k=1;k<=n;k++) (k%2===0? p+=k : i+=k);
  return {pares:p, impares:i};
}
console.log(sumaParesImpares(10));
