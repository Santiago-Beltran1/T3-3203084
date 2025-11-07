// Ej59: Suma de serie geométrica a*r^(n-1)
function sumaGeom(a,r,n){
  if(n<=0) return 0;
  if(r===1) return a*n;
  return a*(1 - Math.pow(r,n)) / (1 - r);
}
console.log(sumaGeom(1,2,5)); // 1+2+4+8+16 = 31
