import { Text, View } from "react-native";
import Card from "../../components/Card";

export default function App(){

    return(
        <View>
            <Card>
                <Text> Un solo texto </Text>
                <Text> Pos dos </Text>
            </Card>

            <Text>Prueba 1</Text>
            <Text>Prueba 2</Text>
        </View>
    )
}