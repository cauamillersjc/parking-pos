import { Text, SafeAreaView, View, TouchableOpacity, Alert } from "react-native"
import { styles } from "./styles"
import { useEffect, useState } from "react"
import { PlateDialog } from "../../components/PlateDialog"
import { newTicket } from "../../services/ticket"
import { useSelector } from "react-redux"

export const Home = () => {
    const [date, setDate] = useState(new Date().toLocaleString('pt-BR'));
    const [dialogVisible, setDialogVisible] = useState(false);
    const [plate, setPlate] = useState('');
    const userSelector = useSelector(state => state.userReducer);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date().toLocaleString('pt-BR'));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const showDialog = () => {
        setDialogVisible(true);
    };

    const handleCancel = () => {
        setDialogVisible(false);
        setPlate('');
    };

    const handleConfirm = () => {
        if (plate) {
            newTicket(plate);
            setDialogVisible(false);
            setPlate('');
        }
    };

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
                        dialogVisible={dialogVisible}
                        handleCancel={handleCancel}
                        handleConfirm={handleConfirm}

                    />
                    <TouchableOpacity style={styles.button} onPress={showDialog}>
                        <Text style={styles.buttonText}>
                            Novo Avulso
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>
                            Finalizar Avulso
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}