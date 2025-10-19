def SantiagoBConvertirCmAPulgadas(SantiagoCm):
    return SantiagoCm / 2.54

cm = float(input("Ingresa centímetros: "))
print(f"{cm} cm = {SantiagoBConvertirCmAPulgadas(cm):.2f} pulgadas")
