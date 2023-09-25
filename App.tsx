import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/pages/home/Home';
import Login from './src/pages/login/Login';

const Stack = createNativeStackNavigator();

const getAuth = (): boolean => {
    return false;
}

export default function App() {
    const isSignedIn = getAuth();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    isSignedIn
                        ?
                        <>
                            <Stack.Screen name="Home" component={Home} />
                        </>
                        :
                        <>
                            <Stack.Screen name="Login" component={Login} />
                        </>
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}