"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones

// function generarInvitados()

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán imprimir en consola
*/

// Definir y crear la función antes de esta llamada

function generarInvitados (){
    const invitado1= prompt ('Nombre y apellido');
    const invitado2= prompt ('Nombre y apellido');
    const invitado3= prompt ('nombre y apellido');
    console.log(invitado1);
    console.log(invitado2);
    console.log(invitado3);
}

generarInvitados();