def SantiagoTienda():
    SantiagoProductos = {"pan": 2000, "leche": 3500, "huevo": 12000}
    SantiagoCarrito = []
    while True:
        print("\nProductos disponibles:")
        for p, v in SantiagoProductos.items():
            print(f"- {p}: ${v}")
        print("\n1. Agregar producto\n2. Ver carrito\n3. Pagar\n4. Salir")
        SantiagoOpcion = input("Opción: ")

        if SantiagoOpcion == "1":
            SantiagoP = input("Producto a agregar: ")
            if SantiagoP in SantiagoProductos:
                SantiagoCarrito.append(SantiagoProductos[SantiagoP])
                print(f"{SantiagoP} agregado.")
            else:
                print("Producto no disponible.")
        elif SantiagoOpcion == "2":
            print("Carrito:", SantiagoCarrito)
        elif SantiagoOpcion == "3":
            print(f"Total a pagar: ${sum(SantiagoCarrito)}")
            break
        elif SantiagoOpcion == "4":
            break
        else:
            print("Opción inválida.")

SantiagoTienda()
