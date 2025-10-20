import time

def SantiagoBTemporizador(SantiagoSegundos, SantiagoMensaje):
    print(f"Esperando {SantiagoSegundos} segundos...")
    time.sleep(SantiagoSegundos)
    print(SantiagoMensaje)

seg = int(input("Segundos: "))
msg = input("Mensaje al finalizar: ")
SantiagoBTemporizador(seg, msg)
