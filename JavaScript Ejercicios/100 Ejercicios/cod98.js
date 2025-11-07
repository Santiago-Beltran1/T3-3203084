// Mini conversor de moneda (USD a COP)
function convertirUSDaCOP() {
  const usd = parseFloat(document.getElementById("usd").value);
  const tasa = 4200; 
  const cop = usd * tasa;
  document.getElementById("resultado").innerText = `$${cop.toLocaleString("es-CO")} COP`;
}
