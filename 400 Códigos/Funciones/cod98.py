def SantiagoBuscarNumero(SantiagoLista, SantiagoNum):
    return SantiagoNum in SantiagoLista

def SantiagoBuscar():
    SantiagoLista = [int(x) for x in input("Números separados por espacio: ").split()]
    SantiagoNum = int(input("Número a buscar: "))
    print("Encontrado:", SantiagoBuscarNumero(SantiagoLista, SantiagoNum))

SantiagoBuscar()
