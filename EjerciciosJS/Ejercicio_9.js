/**
 * Dado N, escribir el producto desde 1 hasta N.
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

scanner.question("Ingrese un numero entero: ", (num) => {
    num = parseInt(num);

    let factorial = 1;

    /**
     * El programa multiplica progresivamente
     * desde el uno hasta el valor ingresado
     * 1 x 2 x 3 x...N
     */
    for(let i = 1; i < num; i++){
        factorial *= i;
    }

    console.log("El producto de 1 a " + num + " es " + factorial);
    scanner.close();
})

