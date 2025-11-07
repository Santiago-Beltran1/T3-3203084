// Ej69: Merge de dos arrays ordenados
function mergeSorted(a,b){
  const r=[]; let i=0,j=0;
  while(i<a.length && j<b.length) r.push(a[i]<b[j]? a[i++]: b[j++]);
  return r.concat(a.slice(i)).concat(b.slice(j));
}
console.log(mergeSorted([1,3,5],[2,4,6]));
