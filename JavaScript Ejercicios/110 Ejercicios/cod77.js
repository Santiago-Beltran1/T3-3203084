// Ej77: Rotar matriz 90 grados (clockwise)
function rotar90(m){
  const n=m.length, res=Array.from({length:n},()=>Array(n).fill(0));
  for(let i=0;i<n;i++) for(let j=0;j<n;j++) res[j][n-1-i] = m[i][j];
  return res;
}
console.log(rotar90([[1,2,3],[4,5,6],[7,8,9]]));
