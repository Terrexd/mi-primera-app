import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const librosIniciales = [
    { id: "1", titulo: "Cien años de soledad", autor: "Gabriel García Márquez", leido: true },
    { id: "2", titulo: "1984", autor: "George Orwell", leido: false },
    { id: "3", titulo: "El Hobbit", autor: "J.R.R. Tolkien", leido: false },
];



export function LibroItem({ titulo, autor, leido }) {
    return (
        <View>
            <Text style={[styles.titulo, leido && styles.leido]}>{titulo}</Text>
            <Text style={[styles.titulo, leido && styles.leido]}>{autor}</Text>
            <Text style={[styles.titulo, leido && styles.leido]}>{leido}</Text>
        </View>
    )
}

export default function App() {

    const [libros, setLibros] = useState(librosIniciales);
    return (
        <View>
            {libros.map((l) => (
                <LibroItem key={l.id} titulo={l.titulo} autor={l.autor} leido={l.leido} />
            ))}
        </View>
    );
}


const styles = StyleSheet.create({
    leido: {
        color: "#bdabab88",
        textDecorationLine: "line-through"
    }
});