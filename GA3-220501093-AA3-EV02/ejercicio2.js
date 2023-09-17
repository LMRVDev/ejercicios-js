/**
 * Desarrollar un programa que permita almacenar las edades 
 * de un grupo de 10 personas en un vector de enteros y luego 
 * determine la cantidad de personas que son menores de edad, 
 * mayores de edad, cuántos adultos mayores, la edad más baja, 
 * la edad más alta y el promedio de edades ingresadas. 
 * Para el ejercicio anterior suponga que un adulto mayor debe 
 * tener una edad igual o superior a 60. Debe validar para cada 
 * ingreso que los valores estén en un rango entre 1 y 120 años. 
 * En caso de error deberá notificar y solicitar un nuevo valor.
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

const edades = [];
let contPersonas = 0;

function obtenerEdad() {
    scanner.question("Ingrese la edad de la persona " + (contPersonas + 1) + ": ", (edadIngresada) => {
        edadIngresada = parseInt(edadIngresada);

        if(edadIngresada > 0 && edadIngresada < 120){
            edades.push(edadIngresada);
            contPersonas++;

            if (contPersonas < 10){
                obtenerEdad();
            } else {
                calcularPromedio(edades);
                encontrarMenoresDeEdad(edades);
                encontrarMayoresDeEdad(edades);
                encontrarAdultosMayores(edades);
                encontrarEdadMasAlta(edades);
                encontrarEdadMasBaja(edades);
                scanner.close();
            }

        } else {
            console.log("Ingrese un rango de edad válido.");
            obtenerEdad();
        }
    });
}

function calcularPromedio(edades){
    let sumatoria = 0;
    for(const edad of edades){
        sumatoria += edad;
    }
    console.log("El promedio de edades es " + (sumatoria / 10));
}

function encontrarMenoresDeEdad(edades){
    let cont = 0;
    for(const edad of edades){
        if(edad < 18){
            cont++
        }
    }
    console.log(cont + " personas son menores de edad");
}

function encontrarMayoresDeEdad(edades){
    let cont = 0;
    for(const edad of edades){
        if(edad >= 18){
            cont++
        }
    }
    console.log(cont + " personas son mayores de edad");
}

function encontrarAdultosMayores(edades){
    let cont = 0;
    for(const edad of edades){
        if(edad >= 60){
            cont++
        }
    }
    console.log(cont + " personas son adultos mayores");
}

function encontrarEdadMasAlta(edades){
    let edadMedida, edadMasAlta = 0;
    for(const edad of edades){
        edadMedida = edad;
        if (edadMedida > edadMasAlta) {
            edadMasAlta = edadMedida;
        }
    }
    console.log("La edad mas alta encontrada es " + edadMasAlta + " años");
}

function encontrarEdadMasBaja(edades){
    let edadMasBaja = 120;
    for(const edad of edades){
        if(edad < edadMasBaja){
            edadMasBaja = edad;
        }
    }
    console.log("La edad mas baja encontrada es " + edadMasBaja + " años");
}

obtenerEdad();
