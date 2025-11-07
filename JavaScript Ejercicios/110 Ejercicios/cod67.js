// Ej67: Extraer diagonal principal de matriz cuadrada
function diagonalPrincipal(m){
  const n = Math.min(m.length, m[0].length);
  const diag=[];
  for(let i=0;i<n;i++) diag.push(m[i][i]);
  return diag;
}
console.log(diagonalPrincipal([[1,2,3],[4,5,6],[7,8,9]]));
