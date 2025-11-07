// Ej60: Potencia por multiplicación sucesiva
function potencia(base, exp){
  if(exp<0) return 1 / potencia(base, -exp);
  let r=1;
  for(let i=0;i<exp;i++) r*=base;
  return r;
}
console.log(potencia(2,8));
