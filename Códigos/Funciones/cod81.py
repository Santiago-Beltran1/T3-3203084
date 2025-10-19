def SantiagoBBuscarPalabra(SantiagoBTexto, SantiagoBPalabra):
    posiciones = []
    palabras = SantiagoBTexto.split()
    for i, p in enumerate(palabras):
        if p.lower() == SantiagoBPalabra.lower():
            posiciones.append(i+1)
    return posiciones

texto = input("Texto: ")
palabra = input("Palabra a buscar: ")
pos = SantiagoBBuscarPalabra(texto, palabra)
print("Encontrada en posiciones:", pos if pos else "No encontrada.")
