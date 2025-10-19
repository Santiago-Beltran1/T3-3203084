import os

# Crear carpeta si no existe
carpeta = "Bucles"
if not os.path.exists(carpeta):
    os.makedirs(carpeta)

# Crear 100 archivos con nombre codX.py
for i in range(1, 101):
    nombre_archivo = f"cod{i}.py"
    ruta_archivo = os.path.join(carpeta, nombre_archivo)
    with open(ruta_archivo, "w") as archivo:
        archivo.write(f"# Archivo {nombre_archivo}\n")
