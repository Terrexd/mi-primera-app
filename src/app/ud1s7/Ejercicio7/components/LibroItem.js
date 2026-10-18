import { StyleSheet, Text } from "react-native";

export default function LibroItem({ titulo }) {
    return <Text style={styles.titulo}>{titulo}</Text>;
}

const styles = StyleSheet.create({
    titulo: { fontSize: 16 },
});