import { StyleSheet, StatusBar } from "react-native"
import { secondaryColor } from "../../constants/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight + 20 || 0,
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
        borderRadius: 12,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: secondaryColor,
        textAlign: "center",
        fontSize: 17,
    },
    buttonView: {
        height: 50,
        alignItems: 'flex-end',
        marginBottom: 15,
        marginTop: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: secondaryColor,
        textAlign: 'center'
    }
})