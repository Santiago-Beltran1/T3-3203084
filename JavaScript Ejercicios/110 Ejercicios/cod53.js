// Ej53: Mostrar y sumar serie 1+2+...+N (retorna string)
function serie1aN(n){
  if(n<1) return 'N inválido';
  let s=0, parts=[];
  for(let i=1;i<=n;i++){ s+=i; parts.push(i); }
  return `${parts.join(' + ')} = ${s}`;
}
console.log(serie1aN(7));
