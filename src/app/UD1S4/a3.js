const tareas = [{ id: "1", titulo: "Comprar pan" }];
function agregarTarea(lista, titulo) {
    // devuelve un array NUEVO con la tarea añadida, sin modificar "lista"
    nuevaTareas = [...tareas, {id: String(lista.length + 1), titulo: titulo}]
}
const nuevas = agregarTarea(tareas, "Estudiar React Native");
console.log(tareas.length, nuevaTareas.length);
console.log(nuevaTareas[1]);

function borrarTarea(lista,id) {
    return lista.filter((t) => t.id !== id)
}

const borrar = borrarTarea(tareas, 2)
console.log(borrar)