import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";


export default function App(){
    const [texto, setTexto] = useState("")

    function borrar(){
        setTexto("")
    }

    return(
        <View>
            <TextInput 
            value={texto}
            onChangeText={setTexto}
            placeholder="Escribe"
            />

            <Text>Estas escribiendo... {texto}</Text>
            <Text>Caracteres: {texto.length}</Text>
            <Button title="Borrar" onPress={borrar}/>
        </View>
    );
}