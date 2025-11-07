// Ej72: Encontrar pares que suman objetivo
function paresQueSuman(arr,target){
  const seen=new Map(), res=[];
  for(const x of arr){
    const need = target - x;
    if(seen.get(need)) res.push([need,x]);
    seen.set(x,true);
  }
  return res;
}
console.log(paresQueSuman([1,2,3,4,5],6));
