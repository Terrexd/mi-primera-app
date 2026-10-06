import { Image, StyleSheet, Text, View } from "react-native";

export default function Index(){
  return(
    <View style={styles.container}>
      <Image source={{uri: "https://pbs.twimg.com/profile_banners/1497592606670434305/1756155340/600x200"}} 
      style ={styles.foto}/>
      <Text style ={styles.textoNombre}>Javier</Text>
      <Text>Valencia Miranda</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex : 1,
    alignItems : "center",
    justifyContent : "center",
  },

  textoNombre: {
    fontSize : 30,
  },

  foto: {
    width : 150,
    height : 150,
    borderRadius: 50,
    alignSelf: "center"
  }
});