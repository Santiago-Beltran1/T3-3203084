#Ejemplo de la libreria Re (Exposición Mía)
import re

correo = "usuario123@gmail.com"
patron = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'

if re.match(patron, correo):
    print("Correo válido")
else:
    print("Correo inválido")


telefono = "+57 3104567890"
patron = r'^\+?\d{2}\s?\d{10}$'

if re.match(patron, telefono):
    print("Número válido")
else:
    print("Número inválido")


texto = "Este producto es una porquería total"
nuevo_texto = re.sub(r'porquería', '****', texto)

print(nuevo_texto)


texto = "Fechas: 12/10/2025, 01/01/2024 y 25/12/2023"
fechas = re.findall(r'\d{2}/\d{2}/\d{4}', texto)

print("Fechas encontradas:", fechas)