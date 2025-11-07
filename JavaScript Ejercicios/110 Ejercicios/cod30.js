// Ejercicio 30: Piedra, Papel o Tijera
const opciones = ['piedra','papel','tijera'];
function jugarPPT(eleccionJugador) {
  eleccionJugador = String(eleccionJugador).toLowerCase();
  if (!opciones.includes(eleccionJugador)) return 'Elección inválida';
  const cpu = opciones[Math.floor(Math.random()*3)];
  if (eleccionJugador === cpu) return { jugador: eleccionJugador, cpu, resultado: 'Empate' };
  const gana = (a,b) => (a === 'piedra' && b === 'tijera') || (a === 'tijera' && b === 'papel') || (a === 'papel' && b === 'piedra');
  const resultado = gana(eleccionJugador, cpu) ? 'Gana jugador' : 'Gana CPU';
  return { jugador: eleccionJugador, cpu, resultado };
}
console.log('Ej30:', jugarPPT('piedra'));
