/**
 * Hacer un programa que sume 5 precios de camisas (en dólares) 
 * y que luego muestre el total de la venta en pesos
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
 * El método 'convertirPreciosCOP()' toma como parametro
 * un arreglo de precios en dolares, realiza la sumatoria
 * y lo convierte a pesos según la tasa de cambio actual.
 */
function convertirPreciosCOP (arregloPreciosDolares){
    let sumatoria = 0;
    let precioCOP;

    for(let valor of arregloPreciosDolares){
        sumatoria += valor;
    }

    precioCOP = sumatoria * 4079.42;

    return precioCOP;

}

/**
 * Se establece un arreglo vacío para asignar los precios
 * y una variable contador para definir la cantidad de 
 * precios de camisas que el usuario va a ingresar
 */
let preciosCamisasDolares = [];
let cont = 0;


/**
 * El método 'sumarPrecios()' se ejecuta repetidamente 
 * hasta que el usuario haya ingresado los 5 precios, 
 * posteriormente cada precio se asigna al arreglo 
 * 'preciosCamisasDolares[]'  
 */
function sumarPrecios(){
    scanner.question("Ingrese el valor de la camisa #" + (cont + 1) + ": ", (entrada) =>{

        let valorCamisa = parseFloat(entrada);
        preciosCamisasDolares.push(valorCamisa);
        cont++;

        if(cont < 5){
            sumarPrecios();
        } else {

            /**
             * Cuando el arreglo tiene 5 valores 
             * se ejecuta el metodo 'convertirPreciosCOP()'
             * para ejecutar la sumatoria y conversión
             */
            scanner.close();
            console.log("El precio total el pesos colombianos es: " + convertirPreciosCOP(preciosCamisasDolares) + " COP");
        }

    });
}

sumarPrecios();