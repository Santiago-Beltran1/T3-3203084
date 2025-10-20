def SantiagoBCesar(SantiagoBTexto, SantiagoBDesplazamiento):
    SantiagoBResultado = ""
    for c in SantiagoBTexto:
        if c.isalpha():
            base = ord('A') if c.isupper() else ord('a')
            SantiagoBResultado += chr((ord(c) - base + SantiagoBDesplazamiento) % 26 + base)
        else:
            SantiagoBResultado += c
    return SantiagoBResultado

texto = input("Texto a codificar: ")
desp = int(input("Desplazamiento: "))
codificado = SantiagoBCesar(texto, desp)
print("Texto codificado:", codificado)
print("Texto decodificado:", SantiagoBCesar(codificado, -desp))
