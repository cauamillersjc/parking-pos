import { useNavigation } from "@react-navigation/native"
import { Button, SafeAreaView, Text, View } from "react-native"
import { styles } from "./styles";
import { Input } from "../../components/Input";
import { useState } from "react";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const navigation = useNavigation();

    const doLogin = () => {
        navigation.navigate('Home');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Input
                placeholder="Digite seu e-mail"
                value={email}
                onChangeText={setEmail}
            />

            <Input
                placeholder="Digite sua senha"
                value={password}
                onChangeText={setPassword}
                password={!isPasswordVisible}
            />

            <Button
                title="Entrar" 
                onPress={doLogin} 
            />
        </SafeAreaView>
    )
}