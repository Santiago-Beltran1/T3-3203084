// Ej56: Sumar serie 1 + 1/2 + ... + 1/N
function sumaHarmonica(n){
  let s=0;
  for(let i=1;i<=n;i++) s += 1/i;
  return +s.toFixed(6);
}
console.log(sumaHarmonica(10));
