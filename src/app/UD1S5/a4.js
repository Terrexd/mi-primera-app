/*
-----------
EJERCICIO 1
-----------

function saludar({nombre}) {

    return `Hola ${nombre}`;
}

console.log(saludar({ nombre: "Ana" })); 

-----------
EJERCICIO 2
-----------
*/

const libro = { titulo: "1984", autor: "George Orwell" }; // tenia una mayuscula

function describir({ titulo, autor }) {
    return `${titulo}, de ${autor}`;
}
console.log(describir(libro));