/**
 * Elaborar un algoritmo que permita ingresar 20 números 
 * y muestre todos los números menores e iguales a 25.
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
 * Se establece un arreglo vacio para guardar las 
 * entradas y un contador para calcular la cantidad
 * de numeros ingresada por el usuario.
 */
let arregloNumeros = [];
let cont = 0;


/**
 * El método filtrarNumeros() recorre el contenido
 * del un arreglo introducido como parámetro, revisa
 * cada valor y lo asigna a otro arreglo según la condición,
 * que en este caso es 'valor <= 20'
 */
function filtrarNumeros(arrNum){
    let numerosFiltrados = [];
    for(let i = 0; i < arrNum.length; i++){
        if(arrNum[i] <= 20){
            numerosFiltrados.push(arrNum[i]);
        }
    }
    return numerosFiltrados;
}

/**
 * La funcion 'leerNumeros()' toma las 20 entradas del usuario 
 * y los asigna al arreglo 'arregloNumeros[]' 
 */
function leerNumeros (){
    scanner.question("Ingrese el número " + (cont + 1) + ": ", (entrada) =>{

        let numero = parseInt(entrada);

        arregloNumeros.push(numero);

        cont++;

        if(cont < 20){

            /**
             * El método 'leerNumeros()' se ejecuta repetidamente
             * hasta que el usuario haya ingresado 20 numeros
             */
            leerNumeros();

        } else {

            /**
             * Cuando el arreglo 'arregloNumeros[]' está completo 
             * con las 20 entradas, se ejecuta el método 'filtrarNumeros()'
             */
            scanner.close();
            console.log("Los valores ingresados menor o igual a 20 son: " + filtrarNumeros(arregloNumeros));
        }

    });
}
    
leerNumeros();

