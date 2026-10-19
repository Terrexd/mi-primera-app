import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  textoNombre: {
    fontSize: 30,
  },

  foto: {
    width: 150,
    height: 150,
    borderRadius: 50,
    alignSelf: "center"
  }
});