import { View, Text, StyleSheet } from "react-native";

export default function App() {
    return (
        <View>
            <Text style={styles.libro}>Cien años de soledad</Text>
            <Text style={styles.libro}>1984</Text>
            <Text style={styles.libro}>El Hobbit</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    libro: { padding: 8, borderBottomWidth: 1, borderBottomColor: "#eee" },
});