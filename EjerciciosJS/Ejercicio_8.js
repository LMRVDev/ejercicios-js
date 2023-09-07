/**
 * Diseñar un algoritmo que permita ingresar la hora, 
 * minutos y segundos, y que calcule la hora en el
 * siguiente segundo ("0<= H <=23", "0<= M <=59" "0<= S<=59").
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
 * El usuario debe ingresar los valores correspondientes a hora, minutos, segundos
 */
scanner.question("Ingrese un valor numerico entre 0 y 23 correspondiente a la hora: ", (hora) =>{
    scanner.question("Ingrese un valor numerico entre 0 y 59 correspondiente a los minutos: ", (min)=>{
        scanner.question("Ingrese un valor numerico entre 0 y 59 correspondiente a los segundos: ", (seg) =>{

            hora = parseInt(hora);
            min = parseInt(min);
            seg = parseInt(seg);

            seg++;


            /**
             * Cuando los segundos llegan al limite
             * se reinician e incrementan los minutos
             */
            if (seg >= 59) {
                seg = 0;
                min++;         
            }
        
            /**
            * Cuando los minutos llegan al limite
            * se reinician e incrementan las horas
            */
            if (min >= 59) {
                min = 0;
                hora++;
            }
        
            /**
             * Cuando la hora llega al limite
             * se reinicia
             */
            if (hora >= 23) {
                hora = 0;
            }

            console.log(`La hora en el siguiente segundo es: H-${hora} M-${min} S-${seg}`);
            scanner.close();

        })
    })
})