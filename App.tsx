import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Google from 'expo-auth-session/providers/google';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as WebBrowser from 'expo-web-browser';
import {
    GoogleAuthProvider,
    User,
    onAuthStateChanged,
    signInWithCredential,
    signOut,
} from 'firebase/auth';
import { useEffect, useReducer, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { TamaguiProvider } from 'tamagui';
import { firebaseAuth } from './firebaseConfig';
import AuthContext from './src/auth/AuthContext';
import {
    restoreTokenAction,
    signInAction,
    signOutAction,
} from './src/auth/actions';
import * as auth from './src/auth/reducer';
import Announcement from './src/screens/announcements/Announcement';
import Calendar from './src/screens/calendar/Calendar';
import CalendarDay from './src/screens/calendar/CalendarDay';
import CalendarEventNew from './src/screens/calendar/CalendarEventNew';
import EventDetail from './src/screens/event/EventDetail';
import EventHighlights from './src/screens/event/EventHighlights';
import Home from './src/screens/home/Home';
import Loading from './src/screens/loading/Loading';
import Login from './src/screens/login/Login';
import { RootStackParamList } from './src/types/navigation';
import config from './tamagui.config';


// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator<RootStackParamList>();
WebBrowser.maybeCompleteAuthSession();

export default function App() {
    const [fontsLoaded] = useFonts({
        NotoSans: require('./src/fonts/NotoSans-VariableFont_wdth,wght.ttf'),
    });
    const [authLoaded, setAuthLoaded] = useState(false)

    // Once fonts loaded, load the app (hide splash screen)
    useEffect(() => {
        const checkFontsLoaded = async () => {
            if (fontsLoaded && authLoaded) {
                await SplashScreen.hideAsync();
            }
        };
        checkFontsLoaded();
    }, [fontsLoaded, authLoaded]);

    const [request, response, promptAsync] = Google.useAuthRequest({
        iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
        androidClientId: process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID,
    });

    const [state, dispatch] = useReducer(auth.reducer, auth.initialState);

    useEffect(() => {
        if (response?.type == 'success') {
            const { id_token } = response.params;
            const credential = GoogleAuthProvider.credential(id_token);
            signInWithCredential(firebaseAuth, credential);
        }
    }, [response]);

    useEffect(() => {
        const unsub = onAuthStateChanged(firebaseAuth, async (user) => {
            if (user) {
                // await AsyncStorage.setItem("user", JSON.stringify(user.refreshToken));
                dispatch(signInAction(user));
                console.log('User authenticated');
            } else {
                console.log('User not authenticated');
            }
            setAuthLoaded(true);
        });

        return () => unsub();
    }, []);

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
            dispatch(signInAction(userData));
        },
        signOut: async () => {
            await signOut(firebaseAuth);
            // await AsyncStorage.removeItem("user");
            dispatch(signOutAction());
        },
    };

    const Tab = createBottomTabNavigator();

    const BottomTabNavigator = () => {
    return <Tab.Navigator screenOptions ={{
            tabBarLabelPosition: "below-icon",
            tabBarShowLabel: true,
            tabBarActiveTintColor: "#F18437",
            tabBarInactiveTintColor: "black",
            headerShown: false,
    
        }}>
        <Tab.Screen name="Home" component={Home} options= {{
                tabBarIcon: ({ color, size }) => <Entypo name="home" color={color} size={size}/>
            }}/>
        <Tab.Screen name="Calendar" component={Calendar} options= {{
                tabBarIcon: ({ color, size }) => <Feather name="user" color={color} size={size}/>
            }}/>
    </Tab.Navigator>
}

    if (!fontsLoaded) return null;

    if (state.isLoading) return <Loading />;

    return (
        <TamaguiProvider config={config} defaultTheme="light">
            <AuthContext.Provider value={authContext}>
                <SafeAreaProvider>
                    <NavigationContainer>
                        <Stack.Navigator>
                            {state.user === null ? (
                                <>
                                    <Stack.Screen
                                        name="Login"
                                        options={{ headerShown: false }}
                                    >
                                        {(props) => (
                                            <Login
                                                {...props}
                                                promptAsync={promptAsync}
                                            />
                                        )}
                                    </Stack.Screen>
                                </>
                            ) : (
                                <>
                                    <Stack.Screen
                                        name="Tab"
                                        component={BottomTabNavigator}
                                        options={{ headerShown: false }}
                                    />
                                    <Stack.Screen
                                        name="Home"
                                        component={Home}
                                        options={{ headerTitle: '' }}
                                    />
                                    <Stack.Screen
                                        name="Announcement"
                                        component={Announcement}
                                        options={{ headerTitle: '' }}
                                    />
                                    <Stack.Screen
                                        name="Calendar"
                                        component={Calendar}
                                        // options={{ headerShown: false }}
                                    />
                                    <Stack.Screen
                                        name="CalendarDay"
                                        component={CalendarDay}
                                        options={{ headerShown: false }}
                                    />
                                    <Stack.Screen
                                        name="CalendarEventNew"
                                        component={CalendarEventNew}
                                        options={{ headerShown: false }}
                                    />
                                    <Stack.Screen
                                        name="EventHighlights"
                                        component={EventHighlights}
                                        options={{ headerTitle: 'Event Highlights' }}
                                    />
                                    <Stack.Screen
                                        name="EventDetail"
                                        component={EventDetail}
                                        options={{ headerTitle: 'Event Detail' }}
                                    />
                                </>
                            )}
                        </Stack.Navigator>
                    </NavigationContainer>
                </SafeAreaProvider>
            </AuthContext.Provider>
        </TamaguiProvider>
    );
}
