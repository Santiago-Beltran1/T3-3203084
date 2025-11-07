// Ej107: Día laboral o fin de semana (1..7)
const esLaboral = d => (d>=1 && d<=7) ? (d>=1 && d<=5 ? 'Laboral' : 'Fin de semana') : 'Día inválido';
console.log(esLaboral(6));
