// Encadenar múltiples then()
SantiagoOperacionAsincrona(true)
  .then(SantiagoResultado => {
    console.log("Primer then:", SantiagoResultado);
    return "Siguiente paso";
  })
  .then(SantiagoSegundo => {
    console.log("Segundo then:", SantiagoSegundo);
    return "Tercer paso final";
  })
  .then(SantiagoTercero => {
    console.log("Tercer then:", SantiagoTercero);
  });
