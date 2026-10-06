/*
    EJERCICIO 1: 
    let modulo = "Desarrollo de Interfaces";
    let horas = 140;
    const IVA = 0.21;
    let aprobado = true;

    console.log(modulo + " tiene " + horas + " horas")

    EJERCICIO 2:
    let edad = 20;
    edad = 21;
    console.log(edad)

    EJERCICIO 3:
    /*
function doble(n){
    return n * 2;
}

function esMayorDeEdad(edad) { 
 return edad >= 18; 
} 

function saludar(nombre) { 
 return "Hola " + nombre; 
} 


    Segunda forma:

    doble = (n) => { 
    return n * 2; 
    } 

    esMayorDeEdad = (edad) =>{ 
    return edad >= 18; 
    } 

    saludar = (nombre) => { 
    return "Hola " + nombre; 
    } 

    console.log(doble(2));
    console.log(esMayorDeEdad(17));
    console.log(saludar("Ana"));

    areaRectangulo = (base,altura) =>{
        return base * altura
    };

    console.log(areaRectangulo(2,3));

    EJERCICIO 4:



const alumno = {
    nombre: "Ana",
    edad: 21,
    ciclo: "DAM",
    modulos: ["Desarrollo de Interfaces", "Acceso a Datos", "Android"],
}

alumno.edad = 21;
alumno.modulos.push("Inglés");
alumno.modulos.length;

console.log(`
    ${alumno.nombre}  (${alumno.edad} años) estudia ${alumno.ciclo}
    Primer módulo: ${alumno.modulos[0]}
    Total de módulos: ${alumno.modulos.length}
    `
)
    

    EJERCICIO 5:
*/

const nombre = "Ana" 
let edad = 20; 
const saludo = `Hola ${nombre}, tienes ${edad} años`; // No eran las comillas que tenian que ser 
edad = 21; // la linea falsa es esta por que no funciona ya que tendria que cambiar el saludo de linea para que funcione
let MAX = 3; // al cambiar la variable tiene que ser let no const
MAX = 5; 

function sumar(a, b) { 
 return a + b; 
} 

console.log(saludo, sumar(2, 3));
