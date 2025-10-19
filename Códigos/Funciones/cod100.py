def SantiagoPagoPorHora(SantiagoHoras, SantiagoTarifa):
    return SantiagoHoras * SantiagoTarifa

def SantiagoPagoTotal():
    SantiagoHoras = float(input("Horas trabajadas: "))
    SantiagoTarifa = float(input("Pago por hora: "))
    print("Pago total:", SantiagoPagoPorHora(SantiagoHoras, SantiagoTarifa))

SantiagoPagoTotal()
