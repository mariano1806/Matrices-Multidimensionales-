personas = []

def ingresar_persona():
    nombre = input("Ingresa el nombre: ")
    apellido = input("Ingresa el apellido: ")
    dni = input("Ingresa el DNI: ")
    telefonos = input("Ingresa los teléfonos separados por comas: ").split(",")
    hijos = input("Ingresa los nombres de los hijos separados por comas: ").split(",")

    personas.append([nombre, apellido, dni, telefonos, hijos])

def mostrar_todos():
    print("\nDatos ingresados:")
    for p in personas:
        print(f"{p[0]} {p[1]}, DNI: {p[2]}, Teléfonos: {len(p[3])} teléfono(s), Hijos: {len(p[4])}")

def filtrar_por_dni():
    dni = input("Ingresa el DNI para filtrar: ")
    for p in personas:
        if p[2] == dni:
            print(f"\nDatos de {p[0]} {p[1]}:\nDNI: {p[2]}, Teléfonos: {len(p[3])} teléfono(s), Hijos: {len(p[4])}")
            return
    print("No se encontró una persona con ese DNI.")

while True:
    print("\n--- Menú ---")
    print("1. Ingresar nueva persona")
    print("2. Mostrar todos los datos")
    print("3. Filtrar por DNI")
    print("4. Salir")
    opcion = input("Elige una opción: ")

    if opcion == "1":
        ingresar_persona()
    elif opcion == "2":
        mostrar_todos()
    elif opcion == "3":
        filtrar_por_dni()
    elif opcion == "4":
        break
    else:
        print("Opción no válida. Intenta de nuevo.")
