import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Login';
import { Home } from '../screens/Home';
import { Settings } from '../screens/Settings';
import { Payment } from '../screens/Payment';
import { BillingTable } from '../screens/BillingTable';

export function RouteStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='Login'
                component={Login}
            />

            <Stack.Screen
                name='Home'
                component={Home}
            />

            <Stack.Screen
                name='Settings'
                component={Settings}
            />

            <Stack.Screen
                name='Payment'
                component={Payment}
            />

            <Stack.Screen
                name='BillingTable'
                component={BillingTable}
            />
        </Stack.Navigator>
    )
}