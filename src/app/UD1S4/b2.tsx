import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function App() {
    const [contador, setContador] = useState(0)

    function sumar() {
        setContador(contador + 1);
        console.log("El contador ahora vale:", contador);
    }

    return (
        <View style={{ marginTop: 60, padding: 20, alignItems: "center" }}>
            <Text style={{ fontSize: 30 }}>{contador}</Text>
            <Button title="+1" onPress={sumar} />
        
        </View>
    );
}

// Le he quitado los parentesis por que yo quiero llamar a la funcion sumar no definirla

