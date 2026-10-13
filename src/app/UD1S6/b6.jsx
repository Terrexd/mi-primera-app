import { useState } from "react";
import { Text, View } from "react-native";
import Card from "../../components/Card";
import LibroItem from "../../components/LibroItem";

const librosIniciales = [
    { id: "1", titulo: "Drácula" },
    { id: "2", titulo: "Frankenstein" },
];

export default function App() {
    const [libros, setLibros] = useState(librosIniciales);

    return (
        <View>
            <Text> Portada: </Text>
            {libros.map((l) => (
                <Card key={l.id}>
                    <LibroItem  />
                </Card>
            ))}
        </View>
    );
}