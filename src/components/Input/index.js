import { SafeAreaView, TextInput, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { secondaryColor } from "../../constants/colors";

const styles = StyleSheet.create({
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000',
        marginHorizontal: 10,
    },
    inputArea: {
        width: '100%',
        height: 45,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderColor: secondaryColor,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        paddingVertical: 0,
        paddingHorizontal: 15,
        marginBottom: 15,
        alignItems: 'center',
        elevation: 7,
    }
})

export const Input = ({ icon, placeholder, value, onChangeText, passwordVisible, password, changeVisible, keyboardType }) => {
    return (
        <SafeAreaView style={styles.inputArea}>
            {icon && <Icon name={icon} color={secondaryColor} size={20} />}

            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={passwordVisible}
                keyboardType={keyboardType}
            />

            {
                password && (
                    passwordVisible ? (
                        <Icon
                            name='eye'
                            color={secondaryColor}
                            size={20}
                            onPress={changeVisible}
                        />
                    ) : (
                        <Icon
                            name='eye-off'
                            color={secondaryColor}
                            size={20}
                            onPress={changeVisible} 
                        />
                    )
                )
            }
        </SafeAreaView>
    );
}