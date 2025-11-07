// Ej84: Validación de email (ya arriba) — función dedicada
function validarEmailStr(email){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase()); }
console.log(validarEmailStr('user@example.com'));
