import { StyleSheet, Text, View } from "react-native";
export default function Laboratorio() {
    return (
        <View style={styles.pantalla}>
            <View style={styles.cabecera}>
                <Text style={styles.texto}>Cabecera (altura fija)</Text>
            </View>
            <View style={styles.contenido}>
                <Text style={styles.texto}>Contenido (flex: 1)</Text>
            </View>
            <View style={styles.pie}>
                <Text style={styles.texto}>Pie (altura fija)</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    pantalla: { flex: 1 },
    cabecera: {
        height: 60, backgroundColor: "#1E3A8A",
        justifyContent: "center", alignItems: "center",
    },
    contenido: {
        flex: 1, backgroundColor: "#3B82F6",
        justifyContent: "center", alignItems: "center",
    },
    pie: {
        height: 60, backgroundColor: "#1E3A8A",
        justifyContent: "center", alignItems: "center",
    },
    texto: { color: "#fff", fontWeight: "bold" },
});