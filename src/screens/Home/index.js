import { Text, SafeAreaView, View, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { useEffect, useState } from "react"
import { PlateDialog } from "../../components/PlateDialog"
import { finalizeTicket, newTicket } from "../../services/ticket"
import { useSelector } from "react-redux"
import { ScanDialog } from "../../components/ScanDialog"

export const Home = () => {
    const [date, setDate] = useState(new Date().toLocaleString('pt-BR'));
    const [plateDialogVisible, setPlateDialogVisible] = useState(false);
    const [scanDialogVisible, setScanDialogVisible] = useState(false);
    const [plate, setPlate] = useState('');
    const userSelector = useSelector(state => state.userReducer);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date().toLocaleString('pt-BR'));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const showPlateDialog = () => {
        setPlateDialogVisible(true);
    };

    const handlePlateCancel = () => {
        setPlateDialogVisible(false);
        setPlate('');
    };

    const handlePlateConfirm = () => {
        if (plate) {
            newTicket(plate);
            setPlateDialogVisible(false);
            setPlate('');
        }
    };

    const showScanDialog = () => {
        setScanDialogVisible(true);
    };

    const closeScanDialog = () => {
        setScanDialogVisible(false);
    };

    const handleCodeScanned = (code) => {
        finalizeTicket(code);
    }

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerTextLeft}>
                    {date}
                </Text>
                <Text style={styles.headerTextRight}>
                    {userSelector?.user?.name}
                </Text>
            </View>

            <SafeAreaView style={styles.container}>
                <View style={styles.buttonView}>
                    <PlateDialog
                        plate={plate}
                        setPlate={setPlate}
                        dialogVisible={plateDialogVisible}
                        handleCancel={handlePlateCancel}
                        handleConfirm={handlePlateConfirm}

                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={showPlateDialog}
                    >
                        <Text style={styles.buttonText}>
                            Novo Avulso
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonView}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={showScanDialog}
                    >
                        <Text style={styles.buttonText}>
                            Finalizar Avulso
                        </Text>
                    </TouchableOpacity>
                    <ScanDialog
                        dialogVisible={scanDialogVisible}
                        closeDialog={closeScanDialog}
                        handleCodeScanned={handleCodeScanned}
                    />
                </View>
            </SafeAreaView>
        </>
    )
}