import { StatusBar } from 'expo-status-bar';
import { useState, useContext } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import AuthContext from '../../auth/AuthContext';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    input: {
        width: "80%"
    },
    button: {
        width: "40%"
    },
});

interface LoginProps {
    promptAsync: () => {};
}

const Login: React.FC<LoginProps> = ({ promptAsync }) => {

    return (
        // <View style={styles.container}>
        //     <Text variant="headlineMedium">Sheares App</Text>
        //     <TextInput
        //         label="Email"
        //         style={styles.input}
        //         mode="outlined"
        //         value={email}
        //         onChangeText={text => setEmail(text)}
        //     />
        //     <TextInput
        //         label="Password"
        //         style={styles.input}
        //         secureTextEntry
        //         mode="outlined"
        //         value={password}
        //         onChangeText={text => setPassword(text)}
        //     />
        //     <Button style={styles.button} mode="outlined" onPress={onLogin}>
        //         Login
        //     </Button>
        // </View>

        <SafeAreaView
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <TouchableOpacity
                style={{
                    backgroundColor: "#4285F4",
                    width: "90%",
                    padding: 10,
                    borderRadius: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 15,
                    marginTop: 80,
                    marginBottom: 150,
                }}
                onPress={() => promptAsync()}
            >
                <Text style={{ fontWeight: "bold", color: "white", fontSize: 17 }}>
                    Sign In with Google
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Login;