/**
 * Realizar la conversión de una temperatura dada en grados Centígrados a grados 
 * Fahrenheit (Fórmula: F = (9/5) C + 32).
 */

/*
Importación de la biblioteca "readline" 
para leer datos de entrada
*/

const readline = require('readline');

/*
Configuración del objeto scanner para
interactuar con el usuatrio
*/
const scanner = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Implementación de la fórmula de conversión
 */
scanner.question("Ingrese la temp° en grados centigrados °C: ", (tempCent) =>{
    let tempFarent = (tempCent * (9 / 5)) + 32;
    console.log(tempCent + "°C equivale a " + tempFarent + " °F");
    scanner.close();
});