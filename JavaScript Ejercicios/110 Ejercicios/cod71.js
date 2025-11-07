// Ej71: Subarray máximo (Kadane)
function maxSubarray(arr){
  let maxSoFar = -Infinity, maxHere = 0;
  for(const x of arr){ maxHere = Math.max(x, maxHere + x); maxSoFar = Math.max(maxSoFar, maxHere); }
  return maxSoFar;
}
console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4]));
