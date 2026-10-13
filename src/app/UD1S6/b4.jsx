import { View } from "react-native";
import Card from "../../components/Card";
import LibroItem from "../../components/LibroItem";

export default function App() {
    return (
        <View>
            {libros.map((l) => (
                <Card key={l.id}>
                    <LibroItem titulo={l.titulo} />
                </Card>
            ))}
        </View>
    );
}
