/**
 * Escribir el algoritmo que permita calcular la nota correspondiente al 
 * primer parcial de “análisis” para un estudiante cualquiera. 
 * Se debe considerar que hay dos talleres y un quiz, que en conjunto 
 * valen un 30% de la nota y el resto (70%) corresponde a la nota del examen parcial
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
 * Variables de calificaciónes
 */
let taller1, taller2, quiz, examParcial;

/**
 * La función nota final toma el promedio de 
 * las 3 primeras notas y define el 30% de este
 * posteriormente define el 70% restante de la 
 * calificación correspondiente al examen parcial.
 */
function notaFinal (taller1, taller2, quiz, examParcial){
    let treintaPorCiento = ((taller1 + taller2 + quiz) / 3) * 0.3;
    let setentaPorCiento = examParcial * 0.7;
    return treintaPorCiento + setentaPorCiento;
}


/**
 * Es necesario implementar la función parseFloat 
 * para trabajar con variables numéricas
 */
scanner.question("Ingrese la calificación del taller #1: ", (respuesta1) => {
    taller1 = parseFloat(respuesta1);

    scanner.question("Ingrese la calificación del taller #2: ", (respuesta2) => {
        taller2 = parseFloat(respuesta2);

        scanner.question("Ingrese la calificación del quiz: ", (respuesta3) => {
            quiz = parseFloat(respuesta3);

            scanner.question("Ingrese la calificación del examen parcial: ", (respuesta4) =>{
                examParcial = parseFloat(respuesta4);

                scanner.close();
                
                console.log("La nota final del estudiante es: " + notaFinal(taller1, taller2, quiz, examParcial));

            });

        });

    });

});



