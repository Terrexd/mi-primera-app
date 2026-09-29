import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const tareasIniciales = [
    {id: 1 , texto: "hacer los deberes"},
    {id: 2 , texto: "estudiar"}, 
    {id: 3 , texto:  "el workbook"}]

export default function Tareas(){
    let cont = 3
    const [tareas, setTareas] = useState(tareasIniciales)
    const [nuevaTarea, setNuevaTarea] = useState("")

    function agregarTarea(){
        setTareas([...tareas, {id : cont , texto : nuevaTarea}]);
        setNuevaTarea("")
    }

    return (
    <View>
        <TextInput placeholder="Introduce una tarea: " value={nuevaTarea} onChangeText={setNuevaTarea}/>
        <Button title="Añadir tarea " onPress={agregarTarea}/>
        {tareas.map(tarea => <Text key={tarea.id}>{ tarea.texto}</Text>)}
    </View>
    );
}