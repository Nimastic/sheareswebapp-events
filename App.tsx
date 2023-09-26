import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/pages/home/Home';
import Login from './src/pages/login/Login';
import Calendar from './src/pages/calendar/Calendar';
import { createContext, useEffect, useReducer } from 'react';
import Loading from './src/pages/loading/Loading';
import * as auth from './src/auth/reducer';
import AuthContext from './src/auth/AuthContext';
import { restoreTokenAction, signInAction, signOutAction } from './src/auth/actions';

const Stack = createNativeStackNavigator();

export default function App() {
    const [state, dispatch] = useReducer(auth.reducer, auth.initialState);

    useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            let userToken = null;

            try {
                // Restore token stored in `SecureStore` or any other encrypted storage
                // userToken = await SecureStore.getItemAsync('userToken');
            } catch (e) {
                // Restoring token failed
            }

            // After restoring token, we may need to validate it in production apps

            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            dispatch(restoreTokenAction(userToken));
        };

        bootstrapAsync();
    }, []);

    const authContext = {
        signIn: async (data) => {
            // In a production app, we need to send some data (usually username, password) to server and get a token
            // We will also need to handle errors if sign in failed
            // After getting token, we need to persist the token using `SecureStore`
            // In the example, we'll use a dummy token
            if (true) {
                dispatch(signInAction(''));
            }
        },
        signOut: (data) => {
            dispatch(signOutAction());
        },
    };

    if (state.isLoading) return <Loading />;

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                <Stack.Navigator>
                    {
                        state.userToken === null
                            ?
                            <>
                                <Stack.Screen name="Login" component={Login} />
                            </>
                            :
                            <>
                                <Stack.Screen name="Home" component={Home} />
                                <Stack.Screen name="Calendar" component={Calendar} />
                            </>
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
}