// Ej64: Unión e intersección sin duplicados
function union(a,b){ return [...new Set([...a,...b])]; }
function interseccion(a,b){ return [...new Set(a.filter(x=>b.includes(x)))]; }
console.log(union([1,2],[2,3]), interseccion([1,2,3],[2,3,4]));
