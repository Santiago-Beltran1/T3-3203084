// Ejercicio 24: Calculadora de figuras geométricas
// Opciones: 'circulo', 'triangulo', 'rectangulo', 'cuadrado'
const PI = Math.PI;
function calculadoraFiguras(tipo, params = {}) {
  switch (tipo.toLowerCase()) {
    case 'circulo': {
      const { r } = params;
      if (r == null || r <= 0) return 'Radio inválido';
      return { area: +(PI * r * r).toFixed(3), perimetro: +(2 * PI * r).toFixed(3) };
    }
    case 'triangulo': {
      const { base, altura, ladoA, ladoB, ladoC } = params;
      if (base == null || altura == null) return 'base y altura requeridos';
      const area = (base * altura) / 2;
      if (ladoA != null && ladoB != null && ladoC != null)
        return { area: +area.toFixed(3), perimetro: +(ladoA + ladoB + ladoC).toFixed(3) };
      return { area: +area.toFixed(3), perimetro: 'Proporcione 3 lados para perímetro' };
    }
    case 'rectangulo': {
      const { largo, ancho } = params;
      if (largo == null || ancho == null) return 'largo y ancho requeridos';
      return { area: +(largo * ancho).toFixed(3), perimetro: +(2 * (largo + ancho)).toFixed(3) };
    }
    case 'cuadrado': {
      const { lado } = params;
      if (lado == null) return 'lado requerido';
      return { area: +(lado * lado).toFixed(3), perimetro: +(4 * lado).toFixed(3) };
    }
    default: return 'Figura inválida';
  }
}
// Demos
console.log('Ej24 circulo:', calculadoraFiguras('circulo', { r: 3 }));
console.log('Ej24 triang:', calculadoraFiguras('triangulo', { base: 4, altura: 3, ladoA:3, ladoB:4, ladoC:5 }));
