const libro = {titulo :"Drácula", autor: "Bram Stoker", paginas: 418}

function crearFicha({titulo, autor, paginas}) {
    return `${titulo} - ${autor} (${paginas} pág.)`;
}
 
console.log(crearFicha(libro));