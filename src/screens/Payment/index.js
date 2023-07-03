import { Text, View, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./styles";
import moment from "moment";
import dateFormat from "../../utils/dateFormat";

export const Payment = () => {
    const ticketSelector = useSelector(state => state.ticketReducer);

    return (
        <SafeAreaView style={styles.container}>

            <View>
                <Text>
                    Ticket: {ticketSelector.ticket.code}
                </Text>
            </View>

            <View>
                <Text>
                    Placa: {ticketSelector.ticket.plate}
                </Text>
            </View>

            <View>
                <Text>
                    Entrada: {moment(ticketSelector.ticket.entrance).format("DD/MM/YYYY HH:mm:ss")}
                </Text>
            </View>

            <View>
                <Text>
                    Saída: {moment(ticketSelector.ticket.exit).format("DD/MM/YYYY HH:mm:ss")}
                </Text>
            </View>

            <View>
                <Text>
                    Permanência: {dateFormat.formatSecondsToHMS(ticketSelector.ticket.permanence)}
                </Text>
            </View>

        </SafeAreaView>
    )
}