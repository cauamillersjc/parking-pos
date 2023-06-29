import Dialog from 'react-native-dialog';
import { TextInputMask } from 'react-native-masked-text';
import { StyleSheet, BackHandler } from 'react-native';

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingHorizontal: 5,
        marginBottom: 10,
        marginHorizontal: 5,
        fontSize: 18
    },
});

export const PlateDialog = ({ plate, setPlate, dialogVisible, handleCancel, handleConfirm }) => {
    return (
        <Dialog.Container
            visible={dialogVisible}
            onBackdropPress={() => handleCancel()}
        >
            <Dialog.Title>Digite a placa</Dialog.Title>
            <TextInputMask
                autoCapitalize="characters"
                style={styles.input}
                type="custom"
                keyboardType='visible-password'
                options={{
                    mask: 'AAA-9*99',
                }}
                value={plate}
                onChangeText={(text) => setPlate(text.toUpperCase())}
                autoFocus
            />
            <Dialog.Button label="Cancelar" onPress={handleCancel} />
            <Dialog.Button label="Confirmar" onPress={handleConfirm} />
        </Dialog.Container>
    )
}