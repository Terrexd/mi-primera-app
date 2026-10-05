const libro = { titulo: "El Hobbit", autor: "J.R.R. Tolkien", paginas: 310 };

const {titulo, autor } = libro

function describir({ titulo, autor, paginas}){
    return `${titulo} del autor ${autor} tiene ${paginas} paginas.`;
}

console.log(describir(libro))

const {editorial} = libro

console.log(editorial)