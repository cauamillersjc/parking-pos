import { BarCodeScanner } from "expo-barcode-scanner";
import { useState, useEffect } from "react";
import { Text, Button, View } from "react-native";
import { StyleSheet } from "react-native";
import Dialog from 'react-native-dialog';
import { sleep } from "../../utils/sleep";
import { secondaryColor } from "../../constants/colors";

const styles = StyleSheet.create({
    scan: {
        height: 400,
        width: 300,
    },
    container: {
        borderRadius: 28,
    },
    title: {
        alignSelf: 'center',
        color: secondaryColor,
        fontSize: 22
    }
});

export const ScanDialog = ({ dialogVisible, closeDialog, handleCodeScanned }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = async ({ data }) => {
        setScanned(true);
        handleCodeScanned(data);
        closeDialog();
        await sleep(1500);
        setScanned(false);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <Dialog.Container
            visible={dialogVisible}
            onBackdropPress={() => closeDialog()}
            contentStyle={styles.container}
        >
            <Dialog.Title style={styles.title}>
                Escaneie o código do ticket
            </Dialog.Title>

            <View style={styles.scan}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
            </View>
        </Dialog.Container>
    )
}