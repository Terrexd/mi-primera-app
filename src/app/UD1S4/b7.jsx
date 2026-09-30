import { useState } from "react";
import { Button, Pressable, Text, TextInput, View } from "react-native";

const productosOriginal = [{ id: 1, nombre: "manzana" },
{ id: 2, nombre: "filetes" }
];

export default function App() {

    const [productos, setNuevoProductos] = useState(productosOriginal);

    const [nombre, setNombre] = useState("");

    const borrarProducto = (idBorrar) => {
        setNuevoProductos(productos.filter(producto => producto.id !== idBorrar))
    }

    const agregarProducto = () => {
        setNuevoProductos([...productos, { id: productos.length + 1, nombre: nombre }])
        setNombre("");
    }
    return (
        <View>
            <TextInput placeholder="Escribe un producto nuevo: " value={nombre} onChangeText={setNombre} />
            <Button disabled={true} title="Agregar" onPress={agregarProducto} />
            {productos.map(producto =>
                <>
                    <View key={producto.id}>
                        <Text key={producto.id}>{producto.nombre}</Text>
                        <Pressable onPress={() => borrarProducto(producto.id)}>
                            <Text>Borrar</Text>
                        </Pressable>
                    </View>
                </>
            )}
            <Text>Total {productos.length} productos</Text>
        </View>
    )
}