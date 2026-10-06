import { ScrollView, StyleSheet, Text, View } from "react-native";


export default function MisModulos() {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Mis Módulos</Text>
            <ScrollView>
                <Text style={styles.modulos}>Desarrollo de Interfaces</Text>
                <Text style={styles.modulos}>Programación Multimedia y Dispositivos Móviles</Text>
                <Text style={styles.modulos}>Programación de Servicios y Procesos</Text>
                <Text style={styles.modulos}>Sistemas de Gestión Empresarial</Text>
                <Text style={styles.modulos}>Empresa e Iniciativa Emprendedora</Text>
                <Text style={styles.modulos}>Inglés Técnico</Text>
                <Text style={styles.modulos}>Proyecto de Desarrollo de Aplicaciones Multiplataforma</Text>
                <Text style={styles.modulos}>Formación en Centros de Trabajo (FCT)</Text>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 50,
        paddingHorizontal: 20
    },

    titulo: {
        fontSize: 50,
        alignItems: "center"
    },

    modulos: {
        backgroundColor: "#969590c5",
        borderRadius: 10,
        padding: 18,
        fontSize: 15
    }
});