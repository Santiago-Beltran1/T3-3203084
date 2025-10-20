import random

def SantiagoBPreguntas():
    preguntas = [
        ("¿Cuál es el planeta más grande del sistema solar?", "jupiter"),
        ("¿Quién pintó la Mona Lisa?", "leonardo da vinci"),
        ("¿En qué continente está Egipto?", "africa"),
        ("¿Cuántos huesos tiene el cuerpo humano adulto?", "206")
    ]
    p = random.choice(preguntas)
    resp = input(p[0] + " ").lower()
    if resp == p[1]:
        print("¡Correcto!")
    else:
        print("Incorrecto, la respuesta era:", p[1])

SantiagoBPreguntas()
