// Ej97: Sistema de autenticación simulado (hash simple)
const crypto = require('crypto');
function hashPwd(pw){ return crypto.createHash('sha256').update(pw).digest('hex'); }
function crearUsuario(user,pw){ return {usuario:user, passHash:hashPwd(pw)}; }
function login(userObj,pw){ return userObj.passHash === hashPwd(pw); }
const u = crearUsuario('juan','1234'); console.log(login(u,'1234'), login(u,'1111'));
