import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { secondaryColor } from "../../constants/colors";
import { ListItem } from "../../components/ListItem";
import { useState } from "react";
import { TableDialog } from "../../components/TableDialog";

export const BillingTable = () => {
    const [dialogVisible, setDialogVisible] = useState(false);

    const handleDialogCancel = () => {
        setDialogVisible(false);
    }

    const handleDialogConfirm = () => {
        return false;
    }

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>
                    Tabelas de Cobrança
                </Text>

                <View style={styles.buttonView}>
                    <TableDialog 
                        dialogVisible={dialogVisible}
                        handleCancel={handleDialogCancel}
                        handleConfirm={handleDialogConfirm}
                        confirmText='Adicionar'
                    />
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => setDialogVisible(true)}
                    >
                        <Text style={styles.buttonText}>
                            <Icon
                                name='add-circle'
                                color={secondaryColor}
                                size={17}
                            />
                            Adicionar Tabela
                        </Text>
                    </TouchableOpacity>
                </View>
                
                <ListItem item='teste' />

            </SafeAreaView>
        </ScrollView>
    )
}