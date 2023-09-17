/**
 * Desarrollar un programa que permita calcular el área o 
 * perímetro de algunas figuras planas según la siguiente tabla
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
 * Se crea un arreglo con las figuras geométricas
 */
const figurasPlanas = ["triangulo", "cuadrado", "rectangulo", "circulo"];

/**
 * Se le pide al usuario que ingrese una de las cuatro figuras geométricas
 */
scanner.question("Escriba el nombre de la figura a medir (ej. triangulo, cuadrado, rectangulo, círculo): ", (figuraPlana) => {

    /**
     * El condicional "if/else" se asegura de que el valor ingresado
     * coincida con alguno de los valores del arreglo "figurasPlanas"
     */
    if (figurasPlanas.includes(figuraPlana)) {
        
        /**
         * La estructura "switch" ejecuta una función diferente 
         * según el valor ingresado, cada función utiliza el objeto
         * "scaner" para pedir los valores correspondientes a cada figura
         * geométrica y entregar los resultados correspondientes al area y perimetro
         */
        switch (figuraPlana) {

            case "triangulo":
                calcularTriangulo();
                break;

            case "rectangulo":
                calcularRectangulo();
                break;

            case "cuadrado":
                calcularCuadrado();
                break;

            case "circulo":
                calcularCirculo();
                break;
        }

    } else {
        console.log("Figura no válida. Por favor, ingrese una figura válida.");
        scanner.close();
    }
});

function calcularTriangulo() {
    scanner.question("Ingrese el valor del lado izquierdo: ", (a) => {
        scanner.question("Ingrese el valor del lado derecho: ", (b) => {
            scanner.question("Ingrese el valor de la base: ", (c) => {
                scanner.question("Ingrese el valor de la altura: ", (d) => {
                    a = parseFloat(a);
                    b = parseFloat(b);
                    c = parseFloat(c);
                    d = parseFloat(d);

                    const perimetro = a + b + c;
                    const area = (c * d) / 2;

                    console.log(`El perímetro del triángulo es: ${perimetro}`);
                    console.log(`El área del triángulo es: ${area}`);
                    scanner.close();
                });
            });
        });
    });
}

function calcularRectangulo() {
    scanner.question("Ingrese el valor de la base: ", (a) => {
        scanner.question("Ingrese el valor de la altura: ", (b) => {
            a = parseFloat(a);
            b = parseFloat(b);

            const perimetro = 2 * (a + b);
            const area = a * b;

            console.log(`El perímetro del rectángulo es: ${perimetro}`);
            console.log(`El área del rectángulo es: ${area}`);
            scanner.close();
        });
    });
}

function calcularCuadrado() {
    scanner.question("Ingrese el valor del lado: ", (a) => {
        a = parseFloat(a);

        const perimetro = 4 * a;
        const area = a * a;

        console.log(`El perímetro del cuadrado es: ${perimetro}`);
        console.log(`El área del cuadrado es: ${area}`);
        scanner.close();
    });
}

function calcularCirculo() {
    scanner.question("Ingrese el valor del radio: ", (a) => {
        a = parseFloat(a);

        const perimetro = 2 * Math.PI * a;
        const area = Math.PI * a * a;

        console.log(`El perímetro del círculo es: ${perimetro}`);
        console.log(`El área del círculo es: ${area}`);
        scanner.close();
    });
}

