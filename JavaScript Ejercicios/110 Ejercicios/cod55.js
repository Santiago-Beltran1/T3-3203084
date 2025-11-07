// Ej55: MCD y MCM (Euclides)
function mcd(a,b){ a=Math.abs(a); b=Math.abs(b); while(b){[a,b]=[b,a%b];} return a; }
function mcm(a,b){ return (a===0||b===0)?0:Math.abs(a*b)/mcd(a,b); }
console.log(mcd(54,24), mcm(6,8));
