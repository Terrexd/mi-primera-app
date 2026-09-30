import { useState } from "react";
import { Button, TextInput, View } from "react-native";


export default function App(){
    const [texto, setTexto] = useState("")

    function saludar(){
        setTexto("")
    }
    
    return(
        <View>
            <TextInput 
            value={texto}
            onChangeText={setTexto}
            placeholder="Escribe"
            />

            <TextInput 

            />
            
            
            <Button title="Saludar" onPress={saludar}/>
        </View>
    );
}