import { StyleSheet, Text, View } from "react-native";

const contacto = {
    nombre: "Laura Pérez",
    telefono: "600 123 456",
    email: "laura@correo.com",
    ciudad: "Sevilla",
};


export default function Index() {
    return (
        <View style={styles.container}>
            <Text >Nombre: {contacto.nombre}</Text>
            <Text>Telefono: {contacto.telefono}</Text>
            <Text>Email: {contacto.email}</Text>
            <Text>Ciudad: {contacto.ciudad}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    nombre: {
        fontSize: 50
    }
});