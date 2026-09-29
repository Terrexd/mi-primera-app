import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function App(){

    const [cont, setCont] = useState(0)

    function sumar(){
        setCont(cont + 1)
        console.log(cont)
    }

    return(
    <View>
        <Text> Contador: {cont}</Text>
        <TextInput />
        <Button title="+1" onPress={sumar}/>
    </View>
    
    )
}