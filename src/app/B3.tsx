import { Image, StyleSheet, Text, View } from "react-native";

const contacto = {
    nombre: "Laura Pérez",
    telefono: "600 123 456",
    email: "laura@correo.com",
    ciudad: "Sevilla",
};


export default function Index() {
    return (
        <View style={styles.container}>
            <Image source={{uri: "https://i.pravatar.cc/150?img=20"}}
            style={styles.foto} />
            <Text style={styles.nombre}>{contacto.nombre}</Text>
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
    },

    foto:{
        height: 150,
        width: 150,
        borderRadius: 20
    }
});