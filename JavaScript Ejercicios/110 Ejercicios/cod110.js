// Ej110: Estado del agua por temperatura (°C) con ternarios anidados
const estadoAgua = t => (t<=0 ? 'sólido' : (t<100 ? 'líquido' : 'gaseoso'));
console.log(estadoAgua(-5), estadoAgua(25), estadoAgua(120));
