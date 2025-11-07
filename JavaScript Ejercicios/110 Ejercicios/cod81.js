// Ej81: Validaciones básicas
function validarNumero(n,min=null,max=null){ if(typeof n!=='number' || isNaN(n)) return false; if(min!==null && n<min) return false; if(max!==null && n>max) return false; return true; }
function validarTexto(s,minLen=1,maxLen=Infinity){ return typeof s==='string' && s.trim().length>=minLen && s.trim().length<=maxLen; }
function validarEmail(e){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e)); }
function validarFecha(d){ return !isNaN(new Date(d).getTime()); }
console.log(validarNumero(5,1,10), validarTexto('hola',1,10), validarEmail('a@b.com'), validarFecha('2020-01-01'));
