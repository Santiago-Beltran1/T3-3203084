// Ej76: Verificar simetría (matriz cuadrada simétrica)
function esSimetrica(m){
  const n=m.length;
  for(let i=0;i<n;i++) for(let j=0;j<n;j++) if(m[i][j]!==m[j][i]) return false;
  return true;
}
console.log(esSimetrica([[1,2,3],[2,5,6],[3,6,9]]));
