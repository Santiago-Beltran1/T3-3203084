// Ej47: Listar primos hasta N
function esPrimo(n){
  if(n<=1) return false;
  if(n<=3) return true;
  if(n%2===0) return false;
  for(let i=3;i<=Math.sqrt(n);i+=2) if(n%i===0) return false;
  return true;
}
function primosHasta(n){
  const r=[];
  for(let i=2;i<=n;i++) if(esPrimo(i)) r.push(i);
  return r;
}
console.log(primosHasta(50));
