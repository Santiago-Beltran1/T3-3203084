// Convertir JSON a Objeto
const data = '[{"nombre":"Santiago","edad":17},{"nombre":"David","edad":18}]';
const personas = JSON.parse(data);
console.log(personas);
