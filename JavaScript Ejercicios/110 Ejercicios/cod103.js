// Ej103: Signo con ternario anidado
const signo = n => Number.isFinite(n) ? (n>0?'positivo':(n<0?'negativo':'cero')) : 'no número';
console.log(signo(-5));
