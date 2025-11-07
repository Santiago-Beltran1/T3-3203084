// Ej80: Merge de arrays (ya lo hicimos en 69), aquí: función auxiliar para merge sort
function merge(a,b){ const r=[]; let i=0,j=0; while(i<a.length && j<b.length) r.push(a[i]<b[j]? a[i++]: b[j++]); return r.concat(a.slice(i)).concat(b.slice(j)); }
console.log(merge([1,3,5],[2,4,6]));
