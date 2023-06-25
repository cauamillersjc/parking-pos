import { SafeAreaView, TextInput, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000',
        marginLeft: 10,

    },
    inputArea: {
        width: '100%',
        height: 45,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000',
        borderRadius: 10,
        paddingVertical: 0,
        paddingRight: 5,
        paddingLeft: 20,
        marginBottom: 15,
        alignItems: 'center',
    }
})

export const Input = ({ icon, placeholder, value, onChangeText, password }) => {
    return (
        <SafeAreaView style={styles.inputArea}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </SafeAreaView>
    );
}