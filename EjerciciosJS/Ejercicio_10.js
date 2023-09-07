/**
 * Realizar un algoritmo que muestre por pantalla 
 * la tabla de multiplicar decreciente de cualquier número,
 * ingresado entre el 1 y el 10.
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


scanner.question("Ingrese un numero entero entre 1 y 10: ", (num) =>{

    num = parseInt(num);

    /**
    * El programa evalua si el numero ingresado
    * está dentro del rango requerido 
    */
    if(num >= 1 && num <= 10){

        console.log("tabla de multiplicar decreciente para " + num + ": ");

        /**
         * A través del metodo for se itera 
         * de manera inversa del 10 a 1
         * guardando y mostrando en consola 
         * el valor correspondiente al numero ingresado
         * por el valor de la iteracion
         *  
         * 10 x N = P
         * 9 x N = P
         * 8 x N = P 
         * ......
         * ....
         * ...
         * ..
         */
        for(let i = 10; i >= 1; i--){
            let mul = num * i;
            console.log(num + " x " + i + " = " + mul);
        }

    } else {
        console.log("Numero ingresado fuera de rango");
    }

    scanner.close();

});