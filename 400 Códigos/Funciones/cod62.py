def SantiagoBDecimalABinario(SantiagoDecimal):
    return bin(SantiagoDecimal)[2:]

n = int(input("Ingresa un número decimal: "))
print(f"Binario: {SantiagoBDecimalABinario(n)}")

