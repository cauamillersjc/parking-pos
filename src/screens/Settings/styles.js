import { StyleSheet, StatusBar } from "react-native"
import { secondaryColor } from "../../constants/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 40
    },
    header: {
        backgroundColor: secondaryColor,
        marginTop: StatusBar.currentHeight || 0,
        padding: 10,
        flexDirection: "row",
    },
    headerTextLeft: {
        color: '#fff',
        flex: 1,
        textAlign: "left",
        fontSize: 18,
    },
    headerTextRight: {
        color: '#fff',
        flex: 1,
        textAlign: "right",
        fontSize: 18,
    },
    button: {
        width: 200,
        padding: 10,
        borderRadius: 12,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: secondaryColor,
    },
    buttonText: {
        color: secondaryColor,
        textAlign: "center",
        fontSize: 18
    },
    buttonView: {
        height: 50,
        marginBottom: 15
    }
})