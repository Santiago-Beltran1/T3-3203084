// Ejercicio 25: Conversor de unidades
function conversorUnidades(tipo, valor) {
  if (typeof valor !== 'number' || isNaN(valor)) return 'Valor numérico requerido';
  switch (tipo.toLowerCase()) {
    case 'm_to_ft': return +(valor * 3.28084).toFixed(4); // metros a pies
    case 'ft_to_m': return +(valor / 3.28084).toFixed(4);
    case 'kg_to_lb': return +(valor * 2.2046226218).toFixed(4);
    case 'lb_to_kg': return +(valor / 2.2046226218).toFixed(4);
    case 'l_to_gal': return +(valor * 0.2641720524).toFixed(4); // litros a galones US
    case 'gal_to_l': return +(valor / 0.2641720524).toFixed(4);
    default: return 'Tipo inválido. Usa m_to_ft, ft_to_m, kg_to_lb, lb_to_kg, l_to_gal, gal_to_l';
  }
}
console.log('Ej25 m→ft:', conversorUnidades('m_to_ft', 1));
console.log('Ej25 kg→lb:', conversorUnidades('kg_to_lb', 5));
