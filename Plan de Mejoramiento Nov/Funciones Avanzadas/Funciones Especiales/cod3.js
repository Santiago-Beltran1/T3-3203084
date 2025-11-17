// Función recursiva para calcular factorial
function SantiagoFactorial(SantiagoN) {
  if (SantiagoN === 0 || SantiagoN === 1) return 1;

  return SantiagoN * SantiagoFactorial(SantiagoN - 1);
}

console.log(SantiagoFactorial(5));
