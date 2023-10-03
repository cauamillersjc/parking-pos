import { useNavigation } from "@react-navigation/native"
import { SafeAreaView, Text, TouchableOpacity } from "react-native"
import { styles } from "./styles";
import { Input } from "../../components/Input";
import { useState } from "react";
import auth from "../../services/auth";
import { useDispatch } from "react-redux";
import { Creators as UserRedux } from "../../redux/userReducer";

export const Login = () => {
    const [email, setEmail] = useState("admin@email.com");
    const [password, setPassword] = useState("q1w2e3r4");
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const changePasswordVisible = () => {
        setPasswordVisible(!isPasswordVisible);
    }

    const doLogin = async () => {
        const USER = await auth.login(email, password)

        if (USER) {
            navigation.navigate('Home');
            dispatch(UserRedux.addUserAction(USER))
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Input
                placeholder="Digite seu e-mail"
                value={email}
                onChangeText={setEmail}
                icon='person'
                keyboardType='email-address'
            />

            <Input
                placeholder="Digite sua senha"
                value={password}
                onChangeText={setPassword}
                password={true}
                passwordVisible={!isPasswordVisible}
                changeVisible={changePasswordVisible}
                icon='key'
            />

            <TouchableOpacity
                style={styles.button}
                onPress={doLogin}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}