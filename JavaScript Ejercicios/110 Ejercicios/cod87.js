// Ej87: Fibonacci recursiva (con memo para eficiencia)
function fibRec(n, memo={0:0,1:1}){ if(n in memo) return memo[n]; memo[n]=fibRec(n-1,memo)+fibRec(n-2,memo); return memo[n]; }
console.log(fibRec(20));
