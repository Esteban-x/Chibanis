import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from './(tabs)/account';
import Login from './login';
import Register from './register';
import Home from './(tabs)/index';

const Stack = createNativeStackNavigator()



function Nav() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Account" component={Account} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Nav
