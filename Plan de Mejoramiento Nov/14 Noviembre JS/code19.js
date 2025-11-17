// Arrow que retorne base y altura de un triángulo

const SantiagoAT = (SantiagoB, SantiagoA) => {
return (SantiagoB * SantiagoA) / 2;
};

// Versión concisa (return implícito)
const SantiagoATC = (SantiagoB, SantiagoA) =>
(SantiagoB * SantiagoA) / 2;

console.log("Área del triángulo:", SantiagoAT(15, 8));
// Resultado: 60
