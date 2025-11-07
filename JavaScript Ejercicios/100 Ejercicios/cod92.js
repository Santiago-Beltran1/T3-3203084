// Login básico con validación
const usuarios = [{ user: "santiago", pass: "12345" }];

function login() {
  const user = document.getElementById("usuario").value;
  const pass = document.getElementById("contrasena").value;

  const encontrado = usuarios.find(u => u.user === user && u.pass === pass);
  if (encontrado) {
    alert("Inicio de sesión exitoso");
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}
