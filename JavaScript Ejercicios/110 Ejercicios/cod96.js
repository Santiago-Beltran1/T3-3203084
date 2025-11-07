// Ej96: Simulador de dados (n tiradas, k caras)
function simularDados(n=1000,k=6){
  const freq=Array(k).fill(0);
  for(let i=0;i<n;i++) freq[Math.floor(Math.random()*k)]++;
  return freq.map((f,i)=>({cara:i+1,veces:f,porc: +(100*f/n).toFixed(2)}));
}
console.log(simularDados(500,6));
