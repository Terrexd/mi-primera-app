import { useState } from "react";
import { Button, Text, View } from "react-native";
import CampoTexto from "../../components/CampoTexto";

export default function App() {
    const [titulos, setTitulos] = useState("");
    const [libros, setLibros] = useState([])

    const addLibro = () => {
        setLibros([...libros, titulos]);
        setTitulos("");
    }

    return (
        <View>
            <CampoTexto placeholder="Introduce el titulo del libro: " value={titulos} onChangeText={setTitulos} />
            <Button title="Añadir" onPress={addLibro}/>
            
            {libros.map((libro, i) => (
                <Text key={i}> {libro} </Text>
            ))}
        </View>
    );
}
