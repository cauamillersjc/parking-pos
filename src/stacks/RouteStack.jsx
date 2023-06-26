import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Login';
import { Home } from '../screens/Home';

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
        </Stack.Navigator>
    )
}