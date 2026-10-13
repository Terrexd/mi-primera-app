import { Text, View } from "react-native";
import Card from "../../components/Card";

export default function App() {
    return (
        <View>
            <Card>
                <Text>Comprar pan</Text> 
            </Card>
        </View>
    );
}

// No se ve nada por que le falta el children al Card.js