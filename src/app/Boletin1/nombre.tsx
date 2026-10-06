import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function App(){

    const [nombre, setNombre] = useState("")

    return (
        <View>
            <TextInput placeholder="Escribe algo tt: " value={nombre} onChangeText={setNombre}/>
            <Text> Has escrito: {nombre}</Text>
        </View>

    )
}