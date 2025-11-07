// Ejercicio 16: MCD (Euclides) y MCM
function mcd(a,b){ a=Math.abs(a); b=Math.abs(b); while(b){ [a,b] = [b, a%b]; } return a; }
function mcm(a,b){ if(a===0||b===0) return 0; return Math.abs(a*b)/mcd(a,b); }
console.log('Ej16 MCD:', mcd(54,24)); // 6
console.log('Ej16 MCM:', mcm(6,8)); // 24
