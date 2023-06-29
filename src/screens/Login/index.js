import { useNavigation } from "@react-navigation/native"
import { Button, SafeAreaView, Text, View } from "react-native"
import { styles } from "./styles";
import { Input } from "../../components/Input";
import { useState } from "react";
import auth from "../../services/auth";
import { useDispatch, useSelector } from "react-redux";
import { Creators as Redux } from "../../redux/userReducer";

export const Login = () => {
    const [email, setEmail] = useState("admin@email.com");
    const [password, setPassword] = useState("q1w2e3r4");
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const doLogin = async () => {
        const USER = await auth.login(email, password)

        if(USER){
            navigation.navigate('Home');
            dispatch(Redux.addUserAction(USER))
        }
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