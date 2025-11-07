// Ej78: Buscar y reemplazar en string (global)
function buscarReemplazarStr(s, busq, rep){
  return s.split(busq).join(rep);
}
console.log(buscarReemplazarStr('hola hola','hola','hey'));
