import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const librosIniciales = [
    { id: "1", titulo: "Cien años de soledad" },
    { id: "2", titulo: "1984" },
    { id: "3", titulo: "El Hobbit" },
];



export function LibroItem({ titulo }) {
    return <Text style={styles.libro}>{titulo}</Text>
}

export default function App() {

    const [libros, setLibros] = useState(librosIniciales);
    return (
        <View>
            {libros.map((l) => (
                <LibroItem key={l.id} titulo={l.titulo} />
            ))}
        </View>
    );
}


const styles = StyleSheet.create({
    libro: {
        padding: 14,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
});