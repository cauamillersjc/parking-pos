import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";

const primaryColor = '#003366'; 

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 40
    },
    header: {
        backgroundColor: primaryColor,
        marginTop: StatusBar.currentHeight || 0,
        height: 40,
        padding: 10,
        flexDirection: "row"
    },
    headerTextLeft: {
        color: "#fff",
        flex: 1,
        textAlign: "left"
    },
    headerTextRight: {
        color: "#fff",
        flex: 1,
        textAlign: "right"
    },
    button: {
        width: 200,
        padding: 10,
        borderRadius: 8,
        backgroundColor:  primaryColor,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: '#fff',
        textAlign: "center",
        fontSize: 18
    },
    buttonView: {
        height: 50,
        marginBottom: 15
    }
    
})