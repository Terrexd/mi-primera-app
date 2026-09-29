const persona = ["Marta", 28, "Sevilla"];

function sumaYProducto(a, b) {
    return [a + b, a * b];
}

const [nombre, edad, ciudad] = persona
console.log(nombre, edad, ciudad)

res = sumaYProducto(3,4)
console.log(res)

const [x,y] = persona
console.log(x,y)
