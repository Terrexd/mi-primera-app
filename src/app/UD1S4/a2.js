/*
const original = ["a", "b"];
const copia = original;
copia.push("c");
console.log(original.length, original === copia);

Saldria 3 y que es verdadero por que usas un push en la copia
*/

const original = ["a", "b"];
const nueva = [...original, "c"];
console.log(original.length, nueva.length, original === nueva);

// Saldria 2 y 3 por que en la nueva estás poniendo a y b y despues añades el c y daria false

