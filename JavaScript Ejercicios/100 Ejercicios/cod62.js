// Simulación de Login Básico
const usuarios = [
  { email: "santiago@mail.com", pass: "1111" },
  { email: "beltran@mail.com", pass: "2222" }
];

function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;

  const encontrado = usuarios.find(u => u.email === email && u.pass === pass);

  if (encontrado) alert("Inicio de sesión exitoso.");
  else alert("Datos incorrectos.");
}

// Ejemplo HTML:
// <input id="email" placeholder="Correo">
// <input id="pass" type="password" placeholder="Contraseña">
// <button onclick="login()">Ingresar</button>
