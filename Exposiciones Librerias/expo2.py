#Random
#Número aleatorio entre 1 y 0
import random

print(random.random())

#Número entero entre 1 y 10
print(random.randint(1,10))

#Seleccionar un color al azar
colores = ["rojo", "verde", "azul", "amarillo"]
print(random.choice(colores))

#Mezclar una lista
numeros = [1,2,3,4,5]
random.shuffle(numeros)
print(numeros)