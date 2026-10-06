import { Image, StyleSheet, Text, View } from "react-native";

export default function Index(){
  return(
    <View style={styles.container}>
      <Image source={{uri: "https://i.pravatar.cc/150?img=33"}} 
      style ={styles.foto}/>
      <Text style ={styles.textoNombre}>Javier</Text>
      <Text>Valencia Miranda</Text>
      <Text>Profesion: Estudiante</Text>
      <Text>Ciudad: Jerez de la Frontera</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex : 1,
    alignItems : "center",
    justifyContent : "center",
    backgroundColor : "#27087e",
    borderRadius: 30,
    marginHorizontal : 150
  },

  textoNombre: {
    fontSize : 30,
    color : "#a3d3c3"
  },

  foto: {
    width : 150,
    height : 150,
    borderRadius: 50,
    alignSelf: "center"
  }
});