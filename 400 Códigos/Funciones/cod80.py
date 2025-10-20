def SantiagoBDiaSemana(SantiagoBDia, SantiagoBMes, SantiagoBAnio):
    if SantiagoBMes < 3:
        SantiagoBMes += 12
        SantiagoBAnio -= 1
    k = SantiagoBAnio % 100
    j = SantiagoBAnio // 100
    h = (SantiagoBDia + (13*(SantiagoBMes+1))//5 + k + k//4 + j//4 + 5*j) % 7
    dias = ["Sábado", "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]
    return dias[h]

d = int(input("Día: "))
m = int(input("Mes: "))
a = int(input("Año: "))
print("Ese día fue:", SantiagoBDiaSemana(d, m, a))
