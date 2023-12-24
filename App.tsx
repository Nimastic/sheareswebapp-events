import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/screens/home/Home';
import Login from './src/screens/login/Login';
import Calendar from './src/screens/calendar/Calendar';
import { useEffect, useReducer } from 'react';
import Loading from './src/screens/loading/Loading';
import * as auth from './src/auth/reducer';
import AuthContext from './src/auth/AuthContext';
import { restoreTokenAction, signInAction, signOutAction } from './src/auth/actions';
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { GoogleAuthProvider, User, onAuthStateChanged, signInWithCredential, signOut } from "firebase/auth";
import { firebaseAuth } from "./firebaseConfig";
import { TamaguiProvider } from 'tamagui';
import config from './tamagui.config'

const Stack = createNativeStackNavigator();
WebBrowser.maybeCompleteAuthSession();

export default function App() {
    const [request, response, promptAsync] = Google.useAuthRequest({
        iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
        androidClientId: process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID,
    })

    const [state, dispatch] = useReducer(auth.reducer, auth.initialState);

    useEffect(() => {
        if (response?.type == "success") {
            const { id_token } = response.params;
            const credential = GoogleAuthProvider.credential(id_token);
            signInWithCredential(firebaseAuth, credential);
        }
    }, [response])

    useEffect(() => {
        const unsub = onAuthStateChanged(firebaseAuth, async (user) => {
            if (user) {
                // await AsyncStorage.setItem("user", JSON.stringify(user.refreshToken));
                dispatch(signInAction(user))
            } else {
                console.log("User not authenticated");
            }
        })

        return () => unsub();
    }, [])

    useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            const userData: User | null = firebaseAuth.currentUser;

            // try {
            //     // Restore token stored in `SecureStore` or any other encrypted storage
            //     // userToken = await SecureStore.getItemAsync('userToken');
            //     // OK IDK WHATS GOING ON HERE... BUT IF I RELOAD THE APP,
            //     // THE CACHED TOKEN IS STILL OK BUT HOW DO I AUTHENTICATE W THE REFRESH TOKEN???? 
            //     // const userJSON = await AsyncStorage.getItem("user");
            //     // const refreshToken = userJSON ? JSON.parse(userJSON) : null;
            //     // userData = refreshToken;
            //     // console.log(firebaseAuth.currentUser);
            //     // const id_token = await refreshIdToken(refreshToken);
            //     // const credential = GoogleAuthProvider.credential(id_token);
            //     // const userCredentials = await signInWithCredential(firebaseAuth, credential);
            //     // userData = userCredentials.user;
            // } catch (e) {
            //     console.log(e);
            //     console.log("No user data found");
            // }

            // After restoring token, we may need to validate it in production apps

            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            dispatch(restoreTokenAction(userData));
        };

        bootstrapAsync();
    }, []);

    const authContext = {
        signIn: async (userData: User) => {
            // After getting token, we need to persist the token using `SecureStore`
            // In the example, we'll use a dummy token
            // await AsyncStorage.setItem("user", JSON.stringify(userData.refreshToken));
            dispatch(signInAction(userData))
        },
        signOut: async () => {
            await signOut(firebaseAuth);
            // await AsyncStorage.removeItem("user");
            dispatch(signOutAction());
        },
    };

    if (state.isLoading) return <Loading />;

    return (
        <TamaguiProvider config={config}>
            <AuthContext.Provider value={authContext}>
                <NavigationContainer>
                    <Stack.Navigator>
                        {
                            state.user === null
                                ?
                                <>
                                    <Stack.Screen name="Login" options={{ headerShown: false }}>
                                        {(props) => <Login {...props} promptAsync={promptAsync} />}
                                    </Stack.Screen>
                                </>
                                :
                                <>
                                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                                    <Stack.Screen name="Calendar" component={Calendar}  options={{ headerShown: false }} />
                                </>
                        }
                    </Stack.Navigator>
                </NavigationContainer>
            </AuthContext.Provider>
        </TamaguiProvider>
    );
}