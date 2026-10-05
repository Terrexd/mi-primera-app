// components/LibroItem.js
/*
-----------
EJERCICIO 5
-----------

import { StyleSheet, Text } from "react-native";

export default function LibroItem({titulo}) {
    return <Text style={styles.libro}>{titulo}</Text>;
}

const styles = StyleSheet.create({
    libro: { padding: 8, 
        borderBottomWidth: 1, 
        borderBottomColor: "#eee" 
    },
});

-----------
EJERCICIO 6
-----------
*/

import { StyleSheet, Text, View } from "react-native";

export default function LibroItem(libro) {
    return (
        <View>
            <Text style={styles.libro}>{libro.titulo}</Text>;
            <Text style={styles.libro}>{libro.autor}</Text>;
            <Text style={styles.libro}>{libro.leido}</Text>;
        </View>
    )
}

const styles = StyleSheet.create({
    libro: {
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#eee"
    },
});
