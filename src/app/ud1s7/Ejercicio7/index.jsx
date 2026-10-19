import { Link, router } from "expo-router";
import { useState } from "react";
import { Pressable, View } from "react-native";
import LibroItem from "./components/LibroItem";

const librosIniciales = [
    { id: "1", titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { id: "2", titulo: "1984", autor: "George Orwell" },
    { id: "3", titulo: "El Hobbit", autor: "J.R.R. Tolkien" },
];

export default function Inicio() {
    const [libros, setLibros] = useState(librosIniciales);
    
    return (
        <View style={{ padding: 20 }}>
            <Link href="/ayuda" style={{ color: "#2563EB", padding: 8 }}>
                Ayuda
            </Link>
            {libros.map((l) => (
                <Pressable
                    key={l.id}
                    onPress={() => router.push({
                        pathname: "/libro/[id]",
                        params: { id: l.id, titulo: l.titulo, autor: l.autor },
                    })}
                >
                    <LibroItem titulo={l.titulo} />
                </Pressable>
            ))}
            
        </View>
    );
}