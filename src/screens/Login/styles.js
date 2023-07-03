import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 40
    },
    button: {
        width: 200,
        padding: 8,
        borderRadius: 12,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: secondaryColor,
    },
    buttonText: {
        color: secondaryColor,
        textAlign: "center",
        fontSize: 24
    },
})