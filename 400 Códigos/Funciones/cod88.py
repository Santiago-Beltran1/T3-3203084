def SantiagoBGenerarUsuario(SantiagoBNombre, SantiagoBApellido):
    usuario = (SantiagoBNombre[:3] + SantiagoBApellido[-3:] + "123").lower()
    print("Tu nombre de usuario sugerido es:", usuario)

SantiagoBNombre = input("Nombre: ")
SantiagoBApellido = input("Apellido: ")
SantiagoBGenerarUsuario(SantiagoBNombre, SantiagoBApellido)
