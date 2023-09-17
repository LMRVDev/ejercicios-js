/**
 * Una emisora con presencia en diferentes ciudades desea conocer el rating 
 * de canciones y cantantes más escuchados (sonados) en este semestre del año. 
 * Por lo tanto, se ha pedido a estudiantes del SENA del programa de tecnólogo 
 * en análisis y desarrollo de software desarrollar una solución que permita conocer 
 * la respuesta de 6 personas con relación a sus gustos musicales. Con fines 
 * administrativos y realizar una rifa entre las personas encuestadas, la emisora 
 * desea poder registrar de las personas entrevistadas su nombre, número de identificación 
 * (cédula), fecha de nacimiento, correo electrónico, ciudad de residencia, ciudad de origen. 
 * Además, se deberá poder almacenar el artista y título de hasta 3 canciones favoritas en 
 * cada una de las personas que se ingrese, teniendo en cuenta lo anterior, se sugiere 
 * que la solución deberá mostrar un menú que permite las siguientes opciones: 
 *  a. Agregar una persona con los datos que se listan anteriormente. 
 *  b. Mostrar la información personal de una persona particular por medio de su posición en el vector.
 */

/**
 * Importacion de la biblioteca "readline" 
 * para leer datos de entrada
 */
const readline = require('readline');

/**
 * Configuración del objeto Scanner 
 * para interactuar con el usuario
 */
const scanner = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * personasEncuestadas es la lista de objetos, donde se 
 * va a almacenar cada uno de los datos de los encuestados
 * 
 */
const personasEncuestadas = [];


function agregarPersonaEncuestada() {

    /**
    * La función agregarPersonaEncuestada() pide los datos requeridos y
    * los almacena en el mapa personaEncuestada{}, cada dato se va almacenando
    * segun su clave-valor
    */
    const personaEncuestada = {};

    scanner.question("Ingrese el nombre de la persona: ", (nombreEncuestado) => {
        personaEncuestada["Nombre"] = nombreEncuestado;

        scanner.question("Ingrese el numero de identificación de la persona: ", (idEncuestado) => {
            personaEncuestada["Identificacion"] = idEncuestado;

            scanner.question("Ingrese la fecha de nacimiento: ", (fechaNacimiento) => {
                personaEncuestada["Fecha"] = fechaNacimiento;

                scanner.question("Ingrese la ciudad de residencia: ", (ciudadResidencia) => {
                    personaEncuestada["Residencia"] = ciudadResidencia;

                    scanner.question("Ingrese la ciudad de origen: ", (ciudadOrigen) => {
                        personaEncuestada["Origen"] = ciudadOrigen;

                        scanner.question("Ingrese artista favorito: ", (artistaFavorito) => {
                            personaEncuestada["Artista Favorito"] = artistaFavorito;

                            scanner.question("Ingrese canción favorita #1: ", (cancion1) => {
                                personaEncuestada["Cancion1"] = cancion1;

                                scanner.question("Ingrese canción favorita #2 (presione enter para dejar en blanco): ", (cancion2) => {
                                    if (cancion2 !== "") {
                                        personaEncuestada["Cancion2"] = cancion2;
                                    }

                                    scanner.question("Ingrese canción favorita #3 (presione enter para dejar en blanco): ", (cancion3) => {
                                        if (cancion3 !== "") {
                                            personaEncuestada["Cancion3"] = cancion3;
                                        }

                                        /**
                                         * Cuando el programa termina de recibir todos los datos requeridos
                                         * el encuestado es almacenado en la lista 'personasEncuestadas'
                                         */
                                        personasEncuestadas.push(personaEncuestada);
                                        console.log("Persona encuestada registrada con éxito.");

                                        /**
                                         * Se repite el menú hasta que el usuario decida finalizar 
                                         * el programa
                                         */
                                        mostrarMenu();
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}


function mostrarInfoPersona(indice) {
    const persona = personasEncuestadas[indice];
    console.log("Mostrando información de: " + persona["Nombre"]);
    console.log(persona);
    mostrarMenu();
}

function mostrarTodasLasPersonas() {
    console.log("Mostrando información de todas las personas encuestadas:");
    for (let index = 0; index < personasEncuestadas.length; index++) {
        const persona = personasEncuestadas[index];
        console.log("\nPersona " + (index + 1) + ":");
        console.log(persona);
    }
    mostrarMenu();
}

/**
 * La función 'mostrarMenu' le permite al usuario ingresar información de encuestados,
 * o visualizar la información
 */
function mostrarMenu() {
    scanner.question("Escriba 'a' para agregar datos de una persona encuestada, 'b' para ver la información de las personas encuestadas o 'c' para salir: ", (opcion) => {
        if (opcion === 'a') {
            agregarPersonaEncuestada();
        } else if (opcion === 'b') {
            if (personasEncuestadas.length === 0) {
                console.log("No hay personas encuestadas registradas.");
                mostrarMenu();
            } else {
                scanner.question("Ingrese un valor entre 1 y " + personasEncuestadas.length + " para consultar la información del respectivo encuestado o presione '0' para mostrar la información de todos los encuestados: ", (valorIntroducido) => {
                    const indice = parseInt(valorIntroducido) - 1;

                    if (valorIntroducido === '0') { 
                        mostrarTodasLasPersonas();
                    } else if (indice >= 0 && indice < personasEncuestadas.length) {
                        mostrarInfoPersona(indice);
                    } else {
                        console.log("Ingrese un valor válido.");
                        mostrarMenu();
                    }
                });
            }
        } else if (opcion === 'c') {
            console.log("Hasta pronto...");
            scanner.close();
        } else {
            console.log("Opción no válida. Por favor, ingrese 'a', 'b' o 'c'.");
            mostrarMenu();
        }
    });
}

mostrarMenu();

