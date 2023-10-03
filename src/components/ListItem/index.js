import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { secondaryColor } from "../../constants/colors";

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        flexDirection: "row",
        padding: 10,
        borderRadius: 12,
        backgroundColor: '#fff',
        elevation: 10,
        marginBottom: 20,
    },
    actions: {
        flex: 1,
        flexDirection: "row-reverse",
    },
    actionIcon: {
        marginHorizontal: 5
    },
    item: {
        fontSize: 18,
    }
});

export const ListItem = ({ item }) => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.item}>
                {item}
            </Text>

            <View style={styles.actions}>
                <Icon
                    name='trash-outline'
                    size={20}
                    style={styles.actionIcon}
                />

                <Icon
                    name='pencil'
                    size={20}
                    style={styles.actionIcon}
                />
            </View>
        </View>
    )
}