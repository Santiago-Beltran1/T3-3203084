// Consumo tradicional de una promesa
SantiagoOperacionAsincrona(true)
  .then(SantiagoResultado => {
    console.log("Resultado:", SantiagoResultado);
  })
  .catch(SantiagoError => {
    console.log("Error:", SantiagoError);
  });
