const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let personas = [];

function preguntar(pregunta) {
    return new Promise(resolve => rl.question(pregunta, respuesta => resolve(respuesta)));
}

async function ingresarPersona() {
    let nombre = await preguntar("Ingresa el nombre: ");
    let apellido = await preguntar("Ingresa el apellido: ");
    let dni = await preguntar("Ingresa el DNI: ");
    let telefonos = (await preguntar("Ingresa los teléfonos separados por comas: ")).split(",");
    let hijos = (await preguntar("Ingresa los nombres de los hijos separados por comas: ")).split(",");

    personas.push([nombre, apellido, dni, telefonos, hijos]);
}

function mostrarTodos() {
    console.log("\nDatos ingresados:");
    personas.forEach(p => {
        console.log(`${p[0]} ${p[1]}, DNI: ${p[2]}, Teléfonos: ${p[3].length} teléfono(s), Hijos: ${p[4].length}`);
    });
}

async function filtrarPorDni() {
    let dni = await preguntar("Ingresa el DNI para filtrar: ");
    let persona = personas.find(p => p[2] === dni);
    
    if (persona) {
        console.log(`\nDatos de ${persona[0]} ${persona[1]}:\nDNI: ${persona[2]}, Teléfonos: ${persona[3].length} teléfono(s), Hijos: ${persona[4].length}`);
    } else {
        console.log("No se encontró una persona con ese DNI.");
    }
}

async function menu() {
    while (true) {
        console.log("\n--- Menú ---");
        console.log("1. Ingresar nueva persona");
        console.log("2. Mostrar todos los datos");
        console.log("3. Filtrar por DNI");
        console.log("4. Salir");

        let opcion = await preguntar("Elige una opción: ");

        if (opcion === "1") await ingresarPersona();
        else if (opcion === "2") mostrarTodos();
        else if (opcion === "3") await filtrarPorDni();
        else if (opcion === "4") break;
        else console.log("Opción no válida. Intenta de nuevo.");
    }

    rl.close();
}

menu();
