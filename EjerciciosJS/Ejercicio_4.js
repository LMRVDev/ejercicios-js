/**
 * Un capital C está situado a un tipo de interés R anual 
 * ¿al término de cuántos años se doblará?
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

let capitalInicial, porcentajeTasaDeInteres;

function calcularCuandoSeDuplicara(capitalInicial, porcentajeTasaDeInteres) {
    let capitalDuplicado = capitalInicial;
    let cont = 0;
    do {
        /**
         * La variable capitalDuplicado inicia del mismo 
         * valor de capitalInicial, se le va sumando progresivamente
         * el valor de la tasa de interes hasta duplicar el valor de capitalInicial 
         */
        capitalDuplicado *= 1 + (porcentajeTasaDeInteres / 100);
        //La variable 'cont' calcula el tiempo que tarda en superar el doble del valor inicial
        cont++;
    } while (capitalDuplicado <= (capitalInicial * 2));

    return cont;
}

scanner.question("Ingrese el valor del capital inicial: ", (dinero) => {

    capitalInicial = parseFloat(dinero);

    scanner.question("Ingrese la tasa de interés: ", (interes) => {

        porcentajeTasaDeInteres = parseFloat(interes);

        scanner.close();


        console.log("El tiempo que se tarda en duplicar un capital de $" +
            capitalInicial + " pesos al " + porcentajeTasaDeInteres + "% de interés es "
            + calcularCuandoSeDuplicara(capitalInicial, porcentajeTasaDeInteres) +
            " años");

    });

});