import Dialog from 'react-native-dialog'
import { Input } from '../Input'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'
import { secondaryColor } from "../../constants/colors"

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: secondaryColor,
        textAlign: 'center',
        marginBottom: 20,
    },
    inputView: {
        marginBottom: 10,
    }
})

export const TableDialog = ({ dialogVisible, handleCancel, handleConfirm, confirmText }) => {
    return (
        <Dialog.Container
            visible={dialogVisible}
            onBackdropPress={() => handleCancel()}
        >
            <Dialog.Title style={styles.title}>
                Tabela de Cobrança
            </Dialog.Title>

            <View style={styles.inputView}>
                <Input placeholder='Nome' />
            </View>

            <View style={styles.inputView}>
                <Input placeholder='Valor 1 hora' keyboardType='decimal-pad' />
            </View>

            <View style={styles.inputView}>
                <Input placeholder='Valor 2 horas' />
            </View>

            <View style={styles.inputView}>
                <Input placeholder='Valor 3 horas' />
            </View>

            <View style={styles.inputView}>
                <Input placeholder='Valor demais horas' />
            </View>

            <Dialog.Button label="Cancelar" onPress={handleCancel} />
            <Dialog.Button label={confirmText} onPress={handleConfirm} />
        </Dialog.Container>
    )
}