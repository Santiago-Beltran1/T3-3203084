// Ejercicio 29: Convertidor de tiempo (segundos <-> hh:mm:ss)
function segundosAHHMMSS(seg) {
  if (!Number.isFinite(seg) || seg < 0) return 'Segundos inválidos';
  const h = Math.floor(seg / 3600);
  const m = Math.floor((seg % 3600) / 60);
  const s = Math.floor(seg % 60);
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}
function hhmmssASegundos(hhmmss) {
  const parts = String(hhmmss).split(':').map(Number);
  if (parts.length !== 3 || parts.some(p => isNaN(p) || p < 0)) return 'Formato inválido';
  return parts[0]*3600 + parts[1]*60 + parts[2];
}
console.log('Ej29:', segundosAHHMMSS(3661), hhmmssASegundos('01:01:01'));
