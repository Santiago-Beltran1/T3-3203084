import random

def SantiagoBAdivinar():
    SantiagoBNumero = random.randint(1, 50)
    intentos = 0
    while True:
        SantiagoBIntento = int(input("Adivina el número (1-50): "))
        intentos += 1
        if SantiagoBIntento < SantiagoBNumero:
            print("Muy bajo 📉")
        elif SantiagoBIntento > SantiagoBNumero:
            print("Muy alto 📈")
        else:
            print(f"🎉 ¡Acertaste en {intentos} intentos!")
            break

SantiagoBAdivinar()
