/*
Un corredor de maratón (distancia 42,195 Km) ha recorrido la 
carrera en 2 horas 25 minutos. Se desea un algoritmo que calcule 
el tiempo medio en minutos por kilómetro
*/ 

//42,195km ó 42195m 
let distanciaMaratonKm = 42.195;

//2horas + 25 minutos = 145 minutos
let tiempoMinutos = 145; 

/**
 * Velocidad media = distancia / tiempo
 * Tiempo medio = tiempo / distancia
 */

let velocidadMedia = distanciaMaratonKm / tiempoMinutos; 
let tiempoMedio = tiempoMinutos / distanciaMaratonKm; 

console.log("La velocidad media recorrida por el atleta es de " + velocidadMedia + " kilómetros por minuto");
console.log("El tiempo medio recorrio por el atleta es de " + tiempoMedio + " minutos por kilómetro");
