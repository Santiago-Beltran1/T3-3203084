def SantiagoBPasos():
    pasos = int(input("Ingrese cantidad de pasos del día: "))
    calorias = pasos * 0.04
    distancia = pasos * 0.8 / 1000
    print(f"Distancia: {distancia:.2f} km")
    print(f"Calorías aproximadas quemadas: {calorias:.1f}")

SantiagoBPasos()
