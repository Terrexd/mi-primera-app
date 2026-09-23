import { Image, StyleSheet, Text, View } from "react-native";

export default function App(){
    return(
        <>
            <View> 
                <Image source={{uri: "https://i.pravatar.cc/150?img=15"}}
                style={style.foto}></Image>
                <Text style={style.nombre}>Marta Gil</Text>
                <Text style={style.profesion}>Programadora</Text>
            </View>
        </>
    ) 
}

const style = StyleSheet.create({
    foto: {
        width : 80,
        height : 80,
        borderRadius : 40
    },

    nombre : {
        fontSize : 20,
        fontWeight : "bold"
    },

    profesion: {
        fontSize : 15,
        color: "#555"
    }
})
