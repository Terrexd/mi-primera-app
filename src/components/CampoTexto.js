import { TextInput } from "react-native";



export default function CampoTexto({value, onChangeText, placeholder}){
    return(
        <TextInput             
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText} 
        />
    )
}