import { Text, SafeAreaView, View, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"


export const Settings = () => {
    const navigation = useNavigation();

    const navigateToBillingTable = () => {
        navigation.navigate('BillingTable');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonView}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={navigateToBillingTable}
                >
                    <Text style={styles.buttonText}>
                        Tabelas de Cobrança
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonView}>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        Operadores
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonView}>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        Relatórios
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}