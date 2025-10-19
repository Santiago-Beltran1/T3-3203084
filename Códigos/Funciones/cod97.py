def SantiagoCrearUsuario(SantiagoNombre, SantiagoApellido):
    return (SantiagoNombre[:3] + SantiagoApellido[:3]).lower()

def SantiagoUsuarioFinal():
    SantiagoNombre = input("Nombre: ")
    SantiagoApellido = input("Apellido: ")
    print("Tu nombre de usuario es:", SantiagoCrearUsuario(SantiagoNombre, SantiagoApellido))

SantiagoUsuarioFinal()
