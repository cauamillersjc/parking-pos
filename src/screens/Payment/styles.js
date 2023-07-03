import { StyleSheet, StatusBar } from "react-native"

export const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})