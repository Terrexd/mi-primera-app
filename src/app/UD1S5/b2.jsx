import { StyleSheet, Text, View } from "react-native";


export function LibroItem({ titulo }) {
  return <Text style={styles.libro}>{titulo}</Text>
}

export default function App() {
  return (
    <View>
      <LibroItem titulo="Cien años de soledad" />
      <LibroItem titulo="1984" />
      <LibroItem titulo="El Hobbit" />
    </View>
  );
}

const styles = StyleSheet.create({
  libro: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});