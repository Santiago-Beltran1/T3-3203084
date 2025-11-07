// Ej93: Algoritmo de Luhn (validar tarjeta)
function luhn(val){
  const s = String(val).replace(/\D/g,'').split('').reverse().map(Number);
  const sum = s.reduce((acc,d,i)=> acc + (i%2? (d*2>9? d*2-9: d*2) : d), 0);
  return sum % 10 === 0;
}
console.log(luhn('4539578763621486'));
