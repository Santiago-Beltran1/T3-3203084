// Ej79: Media, mediana y moda
function estadisticas(nums){
  nums = nums.slice().sort((a,b)=>a-b);
  const media = +(nums.reduce((a,b)=>a+b,0)/nums.length).toFixed(3);
  const mediana = nums.length%2? nums[(nums.length-1)/2] : +(((nums[nums.length/2-1]+nums[nums.length/2])/2).toFixed(3));
  // moda:
  const freq = {}; nums.forEach(x=>freq[x]=(freq[x]||0)+1);
  let modeVal=null, modeCount=0;
  for(const k in freq) if(freq[k]>modeCount){ modeCount=freq[k]; modeVal=Number(k); }
  return {media, mediana, moda: modeVal};
}
console.log(estadisticas([1,2,2,3,4]));
