/**
 * Escriba un programa que lea dos vectores de números enteros ordenados 
 * ascendentemente y luego produzca la lista ordenada de la mezcla de los dos, 
 * por ejemplo, si los dos arreglos tienen los números 1 3 6 9 17 y 2 4 10 17, 
 * respectivamente, la lista de números en la pantalla debe ser 1 2 3 4 6 9 10 17 17.
 * Limite los vectores a un tamaño de 5 y debe validar en cada ingreso que realmente 
 * se estén ingresando los datos de forma ascendente.
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
 * Declaración de los 3 arreglos, los dos primeros 
 * los debe llenar el usuario, el arreglo3 se ordenará 
 * en orden ascendente segun los valores ingresados en los 
 * otros dos.
 */
let lista1 = [];
let lista2 = [];
let lista3 = [];

/**
 * La variable contadorValores se encarga de medir la 
 * cantidad ingresada en cada arreglo
 */
let contadorValores = 0;

/**
 * La función ingresoDeValores() le pide al usuario 5 valores 
 * en orden ascendente, los cuales se asignarán a los arreglos 1 y 2
 */
function ingresoDeValores(lista, cantidad){
    scanner.question("Ingrese en orden ascendente el valor  " + (cantidad + 1) + ": ", (valorIngresado) => {

        valorIngresado = parseInt(valorIngresado);

        if(lista.length ===  0 || valorIngresado > lista[lista.length - 1]){
            /**
             * Si el arreglo está vacío o si el valor ingresado es
             * mayor al anterior el arreglo se irá llenando con los 
             * valores introducidos.
             */

            lista.push(valorIngresado);
            cantidad++;
            if(cantidad < 5){
                /**
                 * El proceso debe repetirse hasta que el arreglo tenga 
                 * 5 valores
                 */
                ingresoDeValores(lista, cantidad);

            } else {
                
                console.log(lista);
                contadorValores == 0;
                ingresoDeValores(lista2, contadorValores);

                if(lista1.length == 5 && lista2.length == 5){

                    /**
                     * Cuando los arreglos 1 y 2 estén llenos se combinan 
                     * con el método "contat"
                     */
                    lista3 = lista1.concat(lista2);
                    console.log("arreglo 1 + arreglo 2 = " + lista3);
                    contadorValores == 0;

                    /**
                     * Posteriormente se utiliza el algoritmo de ordenamiento 
                     * conocido como "Burbuja"
                     */
                    ordenamientoBurbuja(lista3);
                    scanner.close();
                }
            }

        } else {
            /**
             * En caso de que el usuario ingrese un valor inferior
             * al anterior, deberá ingresarlo nuevamente hasta que 
             * todos esten en orden ascendente.
             */
            console.log("Ingrese los valores en orden ascendente");
            ingresoDeValores(lista, cantidad);
        }

    });
}

function ordenamientoBurbuja(lista){
    /**
     * El algoritmo de ordenamiento "Burbuja" consiste en ir
     * envaluando dos posiciones contiguas e intercambiarlas
     * en caso de que la primera sema mayor que la segunda
     */
    do{
        /**
         * La variable booleana determina el ordenamiento final del 
         * arreglo
         */
        posicionIntercambiada = false;

        for(let i = 0; i < lista.length - 1; i++){
            if(lista[i] > lista[i+1]){
                /**
                 * La variable auxiliar ayuda a realizar el intercambio
                 * de valores, almacenando temporalmente el valor a intercambiar
                 */
                let auxiliar = lista[i];
                lista[i] = lista[i+1];
                lista[i+1] = auxiliar;
                
                /**
                 * El bucle do-while se seguirá implementando mientras la 
                 * variable 'posicionIntercambiada' sea verdadera
                 */
                posicionIntercambiada = true;
            }
        }

        /**
         * Si al terminar el recorrido 'for' y la variable 'posicionIntercambiada'
         * permanece "false" quiere decir que el arreglo está ordenado de forma 
         * ascendente, por lo tanto debe terminar el ciclo do-while
         */
    } while (posicionIntercambiada);
    console.log("arreglo 3 ordenado = " + lista);
}

/**
 * Inicio
 */
ingresoDeValores(lista1, contadorValores);

