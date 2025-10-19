def SantiagoBContarLetra(SantiagoTexto, SantiagoLetra):
    return SantiagoTexto.lower().count(SantiagoLetra.lower())

texto = input("Texto: ")
letra = input("Letra a contar: ")
print(f"La letra '{letra}' aparece {SantiagoBContarLetra(texto, letra)} veces.")
