/**
 * Hacer un programa que registre el consumo realizado por 
 * los clientes de un restaurante, si el consumo de cada 
 * cliente excede 50000 se hará un descuento del 20%. 
 * Se debe mostrar el pago de cada cliente y el total de todos los pagos.
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

let cont = 0;
let valorFactura = 0;


/**
 * El programa inicia preguntandole al usuario
 * por la cantidad de clientes que se van a procesar 
 */
scanner.question("Ingrese la cantidad de clientes a registrar: ", (cantidadClientes) => {
    /**
     * La cantidad de clientes ingresada 
     * se convierte en un numero entero
     */
    cantidadClientes = parseInt(cantidadClientes);

    /**
     * Posteriormete se llama a la funcion 
     * procesarCliente(), la cual se encarga 
     * de evaluar si se le aplica el descuento
     * al cliente segun el valor de facturación 
     */
    procesarCliente();

    function procesarCliente() {
        scanner.question("Ingrese el valor a facturar del cliente #" + (cont + 1) + ": ", (valorIngresado) => {
            valorIngresado = parseFloat(valorIngresado);

            if (valorIngresado >= 50000) {
                valorIngresado -= valorIngresado * 0.2;
                console.log("Total a pagar cliente #" + (cont + 1) + ": $" + valorIngresado);
            } else {
                console.log("Total a pagar cliente #" + (cont + 1) + ": $" + valorIngresado);
            }

            /**
             * La funcion realiza la sumatoria de
             * los valores correspondientes a cada 
             * cliente
             */
            valorFactura += valorIngresado;
            cont++;

            if (cont < cantidadClientes) {
                procesarCliente();
            } else {
                /**
                 * Finalmente imprime el total facturado
                 */
                console.log("Total facturado: $" + valorFactura);
                scanner.close();
            }
        });
    } 
});
