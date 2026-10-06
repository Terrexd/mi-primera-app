import { Text, View } from "react-native";

const tareasIniciales = [
    { id: 1, texto: "tarea 1" },
    { id: 2, texto: "tarea 2" },
    { id: 3, texto: "tarea 3" },
]

function Tarea({ texto }) {
    return (
        <Text>La tarea es: {texto}</Text>
    );
}

function Tareas({ tareas }) {
    return (
        <View>
            {tareas.map(tarea => <Tarea tarea={tarea} />)}
        </View>
    );
}

export default function App() {
    return (
        <View>
            <Text> Estamos en la sesion 5</Text>
            <Tareas tareas={tareasIniciales} />

        </View>
    );
}