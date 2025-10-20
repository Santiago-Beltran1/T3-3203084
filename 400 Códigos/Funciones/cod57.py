def SantiagoAnalisis(SantiagoLista):
    SantiagoLista.sort()
    n = len(SantiagoLista)
    mediana = (SantiagoLista[n//2] if n % 2 != 0 else (SantiagoLista[n//2 - 1] + SantiagoLista[n//2]) / 2)
    return sum(SantiagoLista)/n, mediana, max(SantiagoLista)

def SantiagoMain():
    try:
        datos = [float(x) for x in input("Números separados por comas: ").split(",")]
        media, mediana, maximo = SantiagoAnalisis(datos)
        print(f"Media: {media}, Mediana: {mediana}, Máximo: {maximo}")
    except:
        print("Error en los datos.")

SantiagoMain()
