import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function App() {
    const [contador, setContador] = useState(1)

    function sumar() {
        if(contador < 10){
            setContador(contador + 1);
        }else{
            console.log("No se puede más de 10")
        }
        
        console.log("El contador ahora vale:", contador);
    }

    function restar() {
        if (contador > 0) {
            setContador(contador - 1);
        }else{
            console.log("No se puede menos de 0")
        }

        console.log("El contador ahora vale:", contador);
    }

    function reiniciar() {
        setContador(0);
    }
    return (
        <View style={{ marginTop: 60, padding: 20, alignItems: "center" }}>
            <Text style={{ fontSize: 30 }}>{contador}</Text> 
            <Button title="+1" onPress={sumar} disabled={contador === 10} />
            <Button title="-1" onPress={restar} disabled={contador === 0}/>
            <Button title="Reiniciar" onPress={reiniciar} />
        </View>
    );
}