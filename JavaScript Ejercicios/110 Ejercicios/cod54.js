// Ej54: Fibonacci iterativo (n términos)
function fibonacci(n){
  if(n<=0) return [];
  if(n===1) return [0];
  const a=[0,1];
  for(let i=2;i<n;i++) a.push(a[i-1]+a[i-2]);
  return a;
}
console.log(fibonacci(10));
