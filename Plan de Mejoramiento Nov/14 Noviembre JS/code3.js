//Coerción a string

//Aquí se mostraría lo que apareceria si se pone una variable númerica y una string
let Santiago = 50;
let SantiagoText = "100";
let SantiagoR = SantiagoText + Santiago;

// Aquí en este caso aparecería los 10050 ya que 100 es un string y no se captura como número por lo cual no se suma pero se concatena
//Además el 50 pasa de número a str ya que así es la coerción de datos en JavaScript
console.log(SantiagoR)
