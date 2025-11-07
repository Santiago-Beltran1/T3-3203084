// Ej94: Cifrado César (solo letras)
function cesar(s, shift=3){
  return s.replace(/[a-z]/gi, c=>{
    const base = c === c.toUpperCase() ? 65 : 97;
    return String.fromCharCode((c.charCodeAt(0)-base+shift)%26 + base);
  });
}
console.log(cesar('abc XYZ',3));
