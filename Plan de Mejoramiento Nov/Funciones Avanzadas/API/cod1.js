// Petición GET básica usando fetch
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(SantiagoRespuesta => SantiagoRespuesta.json())
  .then(SantiagoDatos => {
    console.log("Datos recibidos Santiago:", SantiagoDatos);
  })
  .catch(SantiagoError => {
    console.log("Error en la petición:", SantiagoError);
  });
