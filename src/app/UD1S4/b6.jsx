import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const productosOriginal = [{ id: 1, nombre: "manzana" },
{ id: 2, nombre: "filetes" }
];

export default function App() {

    const [productos, setNuevoProductos] = useState(productosOriginal);

    const [nombre, setNombre] = useState("");

    // const vacio = nombre.trim() === "";

    const agregarProducto = () => {
        setNuevoProductos([...productos, {id: productos.length+1, nombre: nombre}])
        setNombre("");
    }
    return (
        <View>
            <TextInput placeholder="Escribe un producto nuevo: " value={nombre} onChangeText={setNombre}/>
            <Button disabled={true} title="Agregar" onPress={agregarProducto}/>
            {productos.map(producto => 
                (<Text key={producto.id}>{producto.nombre}</Text>))
                }
            <Text>Total {productos.length} productos</Text>
        </View>
    )
}