def SantiagoBPrestamo(SantiagoMonto, SantiagoInteres, SantiagoAnios):
    total = SantiagoMonto * (1 + SantiagoInteres / 100) ** SantiagoAnios
    return round(total, 2)

monto = float(input("Monto del préstamo: "))
interes = float(input("Interés anual (%): "))
anios = int(input("Años: "))

print(f"Total a pagar: ${SantiagoBPrestamo(monto, interes, anios)}")
