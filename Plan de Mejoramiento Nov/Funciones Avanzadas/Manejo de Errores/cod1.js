// Crear una promesa que se resuelve o se rechaza
function SantiagoOperacionAsincrona(SantiagoExito) {
  return new Promise((SantiagoResolve, SantiagoReject) => {
    setTimeout(() => {
      if (SantiagoExito) {
        SantiagoResolve("Operación exitosa");
      } else {
        SantiagoReject("Ocurrió un error en la operación");
      }
    }, 1000);
  });
}
