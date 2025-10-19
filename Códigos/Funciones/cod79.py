import random

def SantiagoBFraseRandom():
    sujetos = ["Un gato", "Mi tío", "Un programador", "El robot SantiagoB"]
    verbos = ["comió", "bailó", "rompió", "descubrió", "pintó"]
    objetos = ["una pizza", "el teclado", "una galaxia", "el sistema solar"]
    lugares = ["en el baño", "en Marte", "en un café", "en la oficina"]
    print(random.choice(sujetos), random.choice(verbos), random.choice(objetos), random.choice(lugares))

SantiagoBFraseRandom()
