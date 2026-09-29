/*
------------
EJERCICIO 1
------------

function saludar() {
    console.log("Hola");
    return "adiós";
}
const a = saludar;
const b = saludar();
console.log(typeof a, typeof b);

En teoria primero tiene que salir por la consola "Hola" (La función) y en el B te saldrá que es un String

------------ 
EJERCICIO 2
------------

function saludar() {
    console.log("Hola");
    return "adiós";
}

function alPulsar(callback) {
    callback();
}

alPulsar(saludar); // Esta linea está bien
alPulsar(saludar()); // Da error en esta linea por que estás llamando a una funcion que no es callback

------------
EJERCICIO 3
------------

*/

function alPulsar(callback) {
    callback();
}

function borrar(id) {
    console.log("Borrando la tarea", id);
}

alPulsar(() => borrar(3)) // Le hacia falta envolverlo en una funcion flecha sin parámetros