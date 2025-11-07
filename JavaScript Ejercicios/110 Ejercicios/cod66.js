// Ej66: Transponer matriz (asume cuadrada o rectangular)
function transponer(m){
  const r = Array.from({length: m[0].length}, ()=>[]);
  for(let i=0;i<m.length;i++) for(let j=0;j<m[0].length;j++) r[j][i]=m[i][j];
  return r;
}
console.log(transponer([[1,2,3],[4,5,6]]));
