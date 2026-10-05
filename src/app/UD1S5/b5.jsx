import { useState } from "react";
import { View } from "react-native";
import LibroItem from "../../components/LibroItem";

const libros = [
    { id: "1", titulo: "Drácula" },
    { id: "2", titulo: "Frankenstein" },
];

export default function App() {

    const [libro, setLibro] = useState(libros)
    
    return (
        <View>
            <LibroItem titulo="Drácula" />
            {libro.map((l) => (
                <LibroItem key={l.id} titulo={l.titulo} />
            ))}
        </View>
    );
}